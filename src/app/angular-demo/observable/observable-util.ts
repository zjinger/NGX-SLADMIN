export function sequenceSubscriber(observer) {
    const seq = [1, 2, 3];
    let timeoutId;
    function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
            observer.next(arr[idx]);
            if (idx === arr.length - 1) {
                observer.complete();
            } else {
                doSequence(arr, ++idx);
            }
        }, 1000);
    }
    doSequence(seq, 0);
    return {
        unsubscribe() {
            clearTimeout(timeoutId);
        }
    }
}

export function multicastSequenceSubscriber() {
    const seq = [1, 2, 3];
    // 跟踪每个观察者(每个活动订阅对应一个观察者)
    const observers = [];
    // Still a single timeoutId because there will only ever be one
    // set of values being generated, multicasted to each subscriber
    let timeoutId;
    // 返回订阅者函数(在subscribe() 函数调用时运行)
    return (observer) => {
        observers.push(observer);
        // When this is the first subscription, start the sequence
        if (observers.length === 1) {
            timeoutId = doSequence({
                next(val) {
                    // 遍历观察者并通知所有订阅
                    observers.forEach(obs => obs.next(val));
                },
                complete() {
                    // Notify all complete callbacks
                    observers.slice(0).forEach(obs => obs.complete());
                }
            }, seq, 0);
        }
        return {
            unsubscribe() {
                // Remove from the observers array so it's no longer notified
                observers.splice(observers.indexOf(observer), 1);
                // If there's no more listeners, do cleanup
                if (observers.length === 0) {
                    clearTimeout(timeoutId);
                }
            }
        };
    };
}

function doSequence(observer, arr, idx) {
    return setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
            observer.complete();
        } else {
            doSequence(observer, arr, ++idx);
        }
    }, 1000);
}