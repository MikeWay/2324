import { Component } from '@angular/core';
import { of, asyncScheduler, fromEvent, generate, merge, Observable, Subscription, timer, interval  } from 'rxjs';
import { take, map, tap, reduce, mapTo, concatAll, mergeAll, exhaust, filter, distinct, groupBy, mergeMap, pairwise, min, count } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Observables';

  results = '';
  opObs1 = '';
  opObs2 = '';
  opObs3 = '';

  info = '';
  observable: Observable<any> | undefined;
  observable2: Observable<any> | undefined;
  subscription: Subscription | null = null;
  subscription2: Subscription | null= null;

  clearOutput(): void {
    this.results = '';
    this.opObs1 = '';
    this.opObs2 = '';
    this.opObs3 = '';
    this.info = '';
  }

  concatAll(): void {
    this.cleanUp();
    this.makeHigherOrder().pipe(concatAll()).subscribe(x => this.results += `${x} `);
    this.info = 'You should see the output from two observables being processed by concatAll. They are both generating events every 100mS';
  }

  count(): void {
    this.cleanUp();
    this.observable = of(20, 30, 4, 99, 66, 77, 99).pipe(
                                                      tap(x => this.opObs1 += `${x} `),
                                                      count()
                                                      );
    this.subscription = this.observable.subscribe(x => this.results = `Count of values = ${x}` );
  }


  doNow(): void {
    // TODO 1: Create an Observable using interval() which will output a value every 100mS
    // TODO 2: Using pipe and tap output the values into the observable 1  window
    // Hint: Use tap(x => this.opObs1 += `${x} `)
    // TODO 3: Subscribe to the observable using: .subscribe(x => this.results += x)
    // TODO 4: Run the code and click the DoNow button
    // TODO 5: Inside the pipe statment add a take(10) call before the tap() call
    // TODO 6: Run it again
    // TODO 7: Add a map function to the pipe which multiplies the values by 2

    interval(100).pipe(tap(x => this.opObs1 += `${x} `), take(10), map(x => x * 2)).subscribe(x => this.results += `${x} `);

  }

  distinct(): void  {
    let doTap = true;
    this.cleanUp();
    this.observable = generate(10, x => x < 30, x => x + 1).pipe(tap(x => {if (doTap){this.opObs1 += `${x} `; }}));
    this.observable2 = generate(15, x => x < 35, x => x + 1).pipe(tap(x => {if (doTap){this.opObs2 += `${x} `; }}));
    this.subscription = merge(this.observable, this.observable2).pipe(distinct()).subscribe(x => this.results += `${x} `);

    doTap = false; // Supress the tap when we subscribe to show the output of the merged obs
    this.subscription = merge(this.observable, this.observable2).subscribe(x => this.opObs3 += `${x} `);
    this.info = `Two observables with overlapping values piped into distinct. Only unique values should be in the results.
    Observable 3 shows the output if distinct is not used`;
  }

  event(): void {
    this.cleanUp();
    this.observable = fromEvent(document.getElementById('eventBut') as HTMLElement, 'click');
    this.subscription = this.observable.subscribe(x => this.results += `${x} `);
    this.info = 'Click the Event button a few times';

  }

  exhaust(): void {
    this.cleanUp();
    this.makeHigherOrder().pipe(exhaust()).subscribe(x => this.results += `${x} `);
    this.info = `You should see the output from two observables being processed by exhaust. They are both generating events every 100mS.
    Note that you only see the output from the first because the second has completed by the time the first is exhausted`;
  }

  filter(): void  {
    this.cleanUp();
    this.observable = generate(10, x => x < 30, x => x + 1).pipe(tap(x => this.opObs1 += `${x} `), filter( x => x % 2 === 0));
    this.subscription = this.observable.subscribe(x => this.results += `${x} `);
    this.info = 'Observable is filtered so should only show even values in the results';
  }

  generate(): void  {
    this.cleanUp();
    this.observable = generate(10, x => x < 30, x => x + 1);
    this.subscription = this.observable.subscribe(x => this.results += `${x} `);
  }

  pairwise(): void {
    this.cleanUp();
    this.observable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(tap(x => this.opObs1 += `${x} `), pairwise());
    this.observable.subscribe(x => this.results += `[${x}] `);
  }

  higherOrder(): void {
    this.cleanUp();
    this.makeHigherOrder().subscribe(x => this.results += `${x} `);
  }


  higherOrderNestedSubscription(): void {
    this.cleanUp();
    this.makeHigherOrder().subscribe(x => x.subscribe(y => this.results += `${y} `));
    this.info = 'You should see the output from two observables being processed by nested subscriptions. They are both generating events every 100mS';
  }

  map(): void {
    this.cleanUp();
    this.observable = timer(500, 1000).pipe(map(x => `Prefix >> ${x * 2}`));
    this.subscription = this.observable.subscribe(x => this.results += `${x} `);
  }

  mapTo(): void {
    this.cleanUp();
    fromEvent(document.getElementById('eventBut')!, 'click').pipe(
        tap(x => this.opObs1 += `${x} `),
        mapTo('You clicked me!')).subscribe(x => this.results += `${x} `);
    this.info = 'Click the Event Button';
  }

  merge(): void {
    this.cleanUp();
    const timer1 = interval(1000).pipe(take(10), map(x => `S1[${x}]`), tap(x => this.opObs1 += `${x} `));
    const timer2 = interval(2000).pipe(take(6), map(x => `S2[${x}]`), tap(x => this.opObs2 += `${x} `));
    const timer3 = interval(500).pipe(take(10), map(x => `S3[${x}]`), tap(x => this.opObs3 += `${x} `));
    const concurrent = 2; // the argument
    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe(x => this.results += `${x} `);
    // merge(this.observable, this.observable2).subscribe(x => this.opObs2 += `${x} `);
    this.info = 'You should see three observables being merged in the third output panel. The first two are processed concurrently';

  }

  mergeAll(): void {
    this.cleanUp();
    this.makeHigherOrder().pipe(mergeAll()).subscribe(x => this.results += `${x} `);
    this.info = 'You should see the output from two observables being processed by mergeAll. They are both generating events every 100mS';
  }

  min(): void {
    this.cleanUp();
    this.observable = of(20, 30, 4, 99, 66, 77, 99).pipe(
                                                      tap(x => this.opObs1 += `${x} `),
                                                      min()
                                                      );
    this.subscription = this.observable.subscribe(x => this.results = `Minimum value = ${x}` );
  }

  reduce(): void {
    this.cleanUp();
    this.observable = of(20, 30, 4, 99, 66, 77, 99).pipe(
                                                      tap(x => this.opObs1 += `${x} `),
                                                      reduce((accumulator, value) => accumulator + value)
                                                      );
    this.subscription = this.observable.subscribe(x => this.results = `Accumulated value = ${x}` );
  }





  stop(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }


  timer(): void {
    this.cleanUp();
    this.observable = timer(2000, 1000);
    this.subscription = this.observable.subscribe(x => this.results += `${x} `);
    this.info = 'Wait 2 seconds - somthing should happen';
  }

  private makeHigherOrder(): Observable<Observable<number>>{
    const o1 = interval(100).pipe(take(10), tap( x => this.opObs1 += `${x} `));
    const o2 = interval(100).pipe(take(10), map(x => x * 3), tap( x => this.opObs2 += `${x} `));
    return of(o1, o2);
  }


  private cleanUp(): void{
    this.stop();
    this.clearOutput();
  }
}
