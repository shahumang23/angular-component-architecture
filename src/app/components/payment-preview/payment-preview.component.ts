import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'preview',
  templateUrl: './payment-preview.component.html',
  styleUrls: ['./payment-preview.component.scss']
})
export class PaymentPreviewComponent {
  @Input() toAccount: string;
  @Input() amount: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  private fromAccount: string = 'Free Checking(4692)';

  private title: string = 'Preview';
  private icon: string = '../assets/icons/arrows.png';

  /**
   * 
   * @param: value
   * @return: void
   * On the button click of Cancel or Transfer it will fired notification to sender
   * and reset preview screen data 
   */
  onNotify(value: string): void {
    this.resetPreview();
    this.notify.emit(value);
  }

  /**
   * @param: value
   * @return: none
   * Reset all data of Preview screen
   */
  resetPreview() {
    this.fromAccount = "";
    this.toAccount = "";
    this.amount = null;
  }
}
