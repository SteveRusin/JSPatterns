class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        return this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        const index = this.subscribers.findIndex(user => subscriber === user);
        if (index >= 0) {
            return this.subscribers.splice(index, 1);
        }
        return `subscriber hasn't been found`;
    }

    notify(data) {
        this.subscribers.forEach(subscriber => subscriber.receiveData(data));
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }

    receiveData(data) {
        console.log(data);
    }
}

const observable = new Observer();
const first = new Subscriber('fist');
const second = new Subscriber('second');
const third = new Subscriber('third');

observable.subscribe(first);
observable.subscribe(second);
observable.subscribe(third);

observable.notify('hello subscribers');


