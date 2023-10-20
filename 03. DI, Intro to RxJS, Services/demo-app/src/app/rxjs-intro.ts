import { Observable, map } from "rxjs";

const p = new Promise((res, rej) => {
    console.log('from Promise Invoked');
  
    setTimeout(() => {
      res(1200);
    }, 4000);
  });
  
  p.then((data) => console.log('promise', data))
    .then()
    .then();
  
  //sync analogy Promise
  [1].map((x) => x * 2).map((x) => x * 10);
  
  //async analogy Promise
  Promise.resolve(100)
    .then((d) => d * 1.2)
    .then((x) => console.log('from Promise: ', x));
  
  //sync analogy Observable
  [1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);
  
  //async analogy Observable
  
  function interval(intervalValue: number) {
    return new Observable<number>((observer) => {
      //observer.next(1000);
      //observer.next(2000);
      //observer.next(3000);
      let count = 0;
      const timer = setInterval(() => {
        observer.next(count++);
        observer.complete();
        //observer.unsubscribe();
      }, intervalValue);
  
      //this code is invoked on destroy
      return () => {
        clearInterval(timer);
      };
    });
  }
  const stream$ = interval(3000)
  .pipe(map((x) => (x + 1) * 2)) // transform, filter, accumulate result...
  .subscribe({
    next: (x) => console.log('data', x),
    error: (err) => console.error(`Error ocured: ${err}`),
    complete: () => console.log('Stream has been completed!'),
  });
  
  // setTimeout(() => {
    // stream$.subscribe({
      // next: (x) => console.log('data ', x),
      // error: (err) => console.error(`Error occured: ${err}`),
      // complete: () => console.log('Stream has been completed!'),
    // });
  // }, 3000);
  