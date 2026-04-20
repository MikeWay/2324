export class PaymentModel {
  constructor(
    public name: string = '',
    public address: string = '',
    public email: string = '',
    public cardNum: string = '',
    public cardType: string = '',
    public expDate: string = ''){}
}
