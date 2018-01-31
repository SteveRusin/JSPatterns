const someItems = ['first', 'second', 'thirds', 'fourth', 'fifth'];

function uppercase(item){
    return item.toUpperCase();
 }

class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }

    reset() {
        this.index = 0;
    }

    get first() {
        this.reset();
        return this.items[0];
    }

    get next() {
        this.index++;
        return this.items[this.index];
    }

    get last() {
        return this.items[this.items.length - 1];
    }

    get hasNext() {
        return this.index < (this.items.length - 1);
    }

    get isLast(){
        return this.index === this.items.length;
    }

    every(fn){
        const tempArr = [];
        this.reset();
         for (this.index; !this.isLast; this.next){
             tempArr.push(fn(this.items[this.index]))
         }
         return tempArr;
    }
}




const iterator = new Iterator(someItems)


iterator.every(uppercase);


