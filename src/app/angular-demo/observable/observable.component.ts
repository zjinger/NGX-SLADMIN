import { Component, OnInit } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { sequenceSubscriber, multicastSequenceSubscriber } from './observable-util';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.less']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.test4();
  }

  test() {
    // 可观察对象
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);
    // Create observer object 定义观察者
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    // Execute with the observer object 订阅执行
    myObservable.subscribe(myObserver);
  }

  test1() {

    const sequence = new Observable(this.sequenceSubscriber);
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }

  test4() {
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => console.log(x));
  }

  // 单播
  test2() {
    const sequence = new Observable(sequenceSubscriber);
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
    // 如果你订阅了两次，就会有两个独立的流，每个流都会每秒发出一个数字。代码如下：
    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }

  // 多播
  test3() {
    const multicastSequence = new Observable(multicastSequenceSubscriber());
    // Subscribe starts the clock, and begins to emit after 1 second
    multicastSequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });

    setTimeout(() => {
      multicastSequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 1500);
  }

  sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return { unsubscribe() { } };
  }
}
