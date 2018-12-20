import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { RecentTransaction } from '../class/recent-transaction';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private configUrl: string = './assets/mock/transactions.json';
  private transactions: RecentTransaction[];
  private totalBalance: number = 5824.76;
  private merchantLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8lWLyHwAGRQKDN9gyVwAAAABJRU5ErkJggg==";

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param none
   * @return available balance
   * GetBalance return available balance
   */
  getBalance(): number {
    return this.totalBalance;
  }

  /**
   * 
   * @param: transaction (transfer balance)
   * @returns: avilable balance
   * Calculate latest available balance  
   */
  calculateNewBalance(transaction: number): number {
    if (transaction < this.totalBalance) {
      this.totalBalance = this.totalBalance - transaction;
    }
    return this.totalBalance;
  }

  /**
   * 
   * @param: none
   * @return: Observable of RecentTransaction[]
   * Get the list of recent transaction from Json
   */
  getRecentTransactionsLists(): Observable<RecentTransaction[]> {
    return this.http.get(this.configUrl).
      pipe(map((response) => {
        if (response) {
          this.copyOfTransactions(response['data']);
          return response['data'] as RecentTransaction[];
        }
      }));
  }

  /**
   * 
   * @param: transfer 
   * @return: transactions[] with latest transfer entery 
   * Add a latest transfer entery on top in recent transaction list
   */
  addTransaction(transfer: RecentTransaction) {
    var newTransfer = this.setTransferProperties(transfer);
    this.transactions.unshift(newTransfer);
    return this.transactions;
  }

  /**
   * 
   * @param: transactions
   * @return: void
   * Take a copy of recent transaction list 
   */
  private copyOfTransactions(transactions: RecentTransaction[]): void {
    this.transactions = [];

    for (var i = 0; i < transactions.length; i++) {
      var newTransfer = this.setTransferProperties(transactions[i]);
      this.transactions.push(newTransfer);
    }
  }

  /**
   * 
   * @param: transfer
   * @return:RecentTransaction
   * Take a copy of recent transaction object to new transaction object
   */

  private setTransferProperties(transfer: RecentTransaction): RecentTransaction {
    var newTransfer: RecentTransaction = new RecentTransaction();

    newTransfer.amount = transfer.amount;
    newTransfer.categoryCode = transfer.categoryCode;
    newTransfer.merchant = transfer.merchant;
    newTransfer.merchantLogo = transfer.merchantLogo ? transfer.merchantLogo : this.merchantLogo;
    newTransfer.transactionDate = transfer.transactionDate;
    newTransfer.transactionType = transfer.transactionType;

    return newTransfer;
  }
}
