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

    transformSubscribers(fn) {
        return this.subscribers.map(user => fn(user))
    }
}

function toUpperCase(item) {
   return item.toUpperCase()
}

const observable = new Observer();

observable.subscribe('Ivan');
observable.subscribe('Petro');

observable.transformSubscribers(toUpperCase);