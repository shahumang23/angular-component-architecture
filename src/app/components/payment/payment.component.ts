import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecentTransaction } from '../../class/recent-transaction';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  @Input() transfers: RecentTransaction[];
  @Input() balance: number;

  private title: string = 'Make a Transfer';
  private icon: string = '../assets/icons/arrows.png';
  public amount: number;
  public merchantSelected: string;
  private hide: boolean = false;
  private errorAmount: string;
  private merchantInfo: RecentTransaction;

  @Output() send: EventEmitter<RecentTransaction> = new EventEmitter<RecentTransaction>();

  constructor() {
  }

  /**
   * 
   * @param:value (button event) 
   * @returns: void
   * Recevie notification for Cancel or Confirm button event
   * If value is Cancel then redirected to Payment screen and hide Preview screen
   * If value is Confirm then reset the form and Send payment object to componenet
   */
  onNotify(value: string): void {
    value = value.toLowerCase();

    if (value == 'cancel') {
      this.hide = false;
    } else {
      this.merchantInfo.amount = this.amount;

      //reset form
      this.merchantSelected = '';
      this.amount = 0;
      this.hide = false;

      this.send.emit(this.merchantInfo);
    }
  }

  /**
   * @param: none
   * @return: none
   * Set payment data and show payment preview screen
   */
  onClick() {
    this.merchantInfo = this.setNewMerchantInfo();
    this.hide = true;
  }

  /**
   * 
   * @param:value(Amount)
   * @return: none
   * Check amount value and validate that amount
   */
  onBlur(value: number) {
    this.errorAmount = '';
    value = this.amount;

    if (value <= 0) {
      this.amount = 0;
      this.errorAmount = 'Transfers cannot be zero nor negative amounts';
    } else if (this.balance <= -500) {
      this.errorAmount = 'Balance is too low';
    } else if (value > this.balance) {
      this.errorAmount = 'Current balance is too low';
    }
  }


  /**
   * @param: none
   * @return: RecentTransaction
   * set Merchant Info in the recenttransaction
   */
  private setNewMerchantInfo(): RecentTransaction {
    var newTransfer: RecentTransaction = new RecentTransaction();

    newTransfer.amount = this.amount;
    newTransfer.categoryCode = '#c12020';
    newTransfer.merchant = this.merchantSelected;
    newTransfer.merchantLogo = '';
    newTransfer.transactionType = 'Online Transfer';

    return newTransfer;
  }

}
