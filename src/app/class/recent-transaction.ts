export class RecentTransaction {
	public amount: number;
	public categoryCode: string;
	public merchant: string;
	public merchantLogo: string;
	public transactionDate: number;
	public transactionType: string;

	constructor() {
		this.amount = 0;
		this.categoryCode = '';
		this.merchant = '';
		this.merchantLogo = '';
		this.transactionDate = Date.now();
		this.transactionType = 'Online Transfer';
	}
}
