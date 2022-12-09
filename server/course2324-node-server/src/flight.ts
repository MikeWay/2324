export class Flight {
  constructor(public id: number, public flightNumber: string, public origin: string, public destination: string, public departDay: string,
              public departTime: string, public arriveDay: string, public arriveTime: string, public  price: number){}
}
