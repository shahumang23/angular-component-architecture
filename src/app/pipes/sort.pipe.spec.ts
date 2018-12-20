import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe: SortPipe;
  const item: any[] = [
    {
      "amount": "84.64",
      "categoryCode": "#12a580",
      "merchant": "The Tea Lounge",
      "merchantLogo": "",
      "transactionDate": 1476933842000,
      "transactionType": "Card Payment"
    },
    {
      "amount": "82.02",
      "categoryCode": "#d51271",
      "merchant": "Umang",
      "merchantLogo": "",
      "transactionDate": 1476926642000,
      "transactionType": "Card Payment"
    }
  ];
  const expectValue: any[] = [
    {
      "amount": "82.02",
      "categoryCode": "#d51271",
      "merchant": "Umang",
      "merchantLogo": "",
      "transactionDate": 1476926642000,
      "transactionType": "Card Payment"
    },
    {
      "amount": "84.64",
      "categoryCode": "#12a580",
      "merchant": "The Tea Lounge",
      "merchantLogo": "",
      "transactionDate": 1476933842000,
      "transactionType": "Card Payment"
    }
  ];
  const desExpectValue: any[] = [
    {
      "amount": "84.64",
      "categoryCode": "#12a580",
      "merchant": "The Tea Lounge",
      "merchantLogo": "",
      "transactionDate": 1476933842000,
      "transactionType": "Card Payment"
    }, {
      "amount": "82.02",
      "categoryCode": "#d51271",
      "merchant": "Umang",
      "merchantLogo": "",
      "transactionDate": 1476926642000,
      "transactionType": "Card Payment"
    }
  ];
  beforeEach(() => {
    pipe = new SortPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return ascending sorting value as per merchant', () => {
    expect(pipe.transform(item, 'merchant', true)).toEqual(item);
  });
  it('should return ascending sorting value as per amount', () => {
    expect(pipe.transform(item, 'amount', true)).toEqual(expectValue);
  });
  it('should return  ascending sorting value as per transactionDate', () => {
    expect(pipe.transform(item, 'transactionDate', true)).toEqual(expectValue);
  });
  it('should return  descending sorting value as per amount', () => {
    expect(pipe.transform(item, 'amount', false)).toEqual(desExpectValue);
  });
  it('should return  descending sorting value as per transactionDate', () => {
    expect(pipe.transform(item, 'transactionDate', false)).toEqual(desExpectValue);
  });
  it('should return descending sorting value as per merchant', () => {
    expect(pipe.transform(item, 'merchant', false)).toEqual(item);
  });
  it('should return item array when search with different sorting option', () => {
    expect(pipe.transform(item, 'transactionDate1', false)).toEqual(item);
  });
});
