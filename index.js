class Car {
    constructor(wheels, engine, transmission) {
        this.wheels = wheels;
        this.engine = engine;
        this.transmission = transmission;
    }

    startEngine() {
        console.log('ron don don');
    }
}

class Porshe extends Car {
    constructor(wheels = 4, engine = '5.7 litre 612 hp V10', transmission = 'mechanic') {
        super(wheels, engine, transmission);
    }

    startEngine() {
        console.log('Porshe engine started');
    }
}

class Toyota extends Car {
    constructor(wheels = 4, engine = '3.5 L (3,470 cc) 1PZ', transmission = 'auto') {
        super(wheels, engine, transmission);
    }

    startEngine() {
        console.log('Toyota engine started');
    }
}

class Kamaz extends Car {
    constructor(wheels = 6, engine = 'super powerful kamaz engine', transmission = 'mechanic') {
        super(wheels, engine, transmission);
    }
}

function carFactory(typeOfCar) {
    typeOfCar = typeOfCar.toLowerCase();
    switch (typeOfCar){
        case 'porshe':
            return new Porshe();
        case 'toyota':
            return new Toyota();
        case 'kamaz':
            return new Kamaz();
        default:
            console.log(`We haven't developed that kind of car yet`);
            break;
    }
}
