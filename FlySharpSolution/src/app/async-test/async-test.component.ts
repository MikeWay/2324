import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-async-test',
  templateUrl: 'async-test.component.html',
  styleUrls: ['async-test.component.css']
})
export class AsyncTestComponent implements OnInit {

  worked : boolean;

  constructor() {}

  ngOnInit() {
    // var worked = false;
    // var promise = new Promise((resolve, reject) => {
    //   // do some work – perhaps create and HTTP connection
    //   if (worked) {
    //     resolve("Stuff worked!");
    //   }
    //   else {
    //     reject("Something failed");
    //   }
    // });
    // this.worked = true;
    // promise.then((m)=>{console.log(m); worked=true; }).then((m)=>{console.log("Two : " + m)});
    this.init();
  }

  doResolve(msg : string){}

  doReject(msg : string){}


  private data: any;
  private values:Array<number> = [];
  private errors:string = "";
  private finished:boolean;



  init() {
    this.data = Observable.create((observer) => {
      let i=10;
      while(i--){
        let time = Math.random() * 10000;
        // if(time > 9000) {
        //   observer.error("Error: " + time);
        // }
        setTimeout(() => {
          observer.next(time);
          console.log("AA");
        }, time);

      }
      observer.complete();
    });

    let subscription = this.data.subscribe(
      value => this.values.push(value),
      error => this.errors += " " + error,
      () => this.finished = true
    );

    //subscription.unsubscribe();
  }

}
