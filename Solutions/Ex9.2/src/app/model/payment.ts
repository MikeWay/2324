export class Payment {
  constructor(
    public name: string = '',
    public address: string = '',
    public email: string = '',
    public cardNum: string = '',
    public cardType: string = '',
    public expDate: Date = new Date()) { }
}
