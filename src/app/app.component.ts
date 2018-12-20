import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { RecentTransaction } from './class/recent-transaction';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private transfer: RecentTransaction;
  private transactions: RecentTransaction[] = [];
  private balance: number;

  constructor(private restService: RestService) {
    this.transfer = new RecentTransaction();
  }

  ngOnInit() {
    this.getRecentTransactions();
  }

  /**
   * @param: none
   * @return: void
   * Get the recent transactions list and available balance from reseService
   */
  getRecentTransactions(): void {
    this.balance = this.restService.getBalance();
    this.restService.getRecentTransactionsLists().subscribe((data: RecentTransaction[]) => {
      this.transactions = data;
    });
  }

  /**
   * @param: transfer: RecentTransaction
   * @return: void
   * Add new transaction entery into recent transaction list and fetch latest avilable balance
   */
  addNewTransactionsOnList(transfer: RecentTransaction): void {
    this.transactions = this.restService.addTransaction(transfer);
    this.balance = this.restService.calculateNewBalance(transfer.amount);
  }
}
