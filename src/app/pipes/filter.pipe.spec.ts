import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  const item: any[] = [
    {
      "amount": "82.02",
      "categoryCode": "#12a580",
      "merchant": "The Tea Lounge",
      "merchantLogo": "",
      "transactionDate": 1476933842000,
      "transactionType": "Card Payment"
    },
    {
      "amount": "84.64",
      "categoryCode": "#d51271",
      "merchant": "Texaco",
      "merchantLogo": "",
      "transactionDate": 1476926642000,
      "transactionType": "Card Payment"
    }
  ];
  const expectedValue = [{ amount: '84.64', categoryCode: '#d51271', merchant: 'Texaco', merchantLogo: '', transactionDate: 1476926642000, transactionType: 'Card Payment' }];

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return item if value is null', () => {
    expect(pipe.transform(item, null)).toEqual(item);
  });

  it('should return filter array', () => {
    expect(pipe.transform(item, 'Texaco')).toEqual(expectedValue);
  });
});
