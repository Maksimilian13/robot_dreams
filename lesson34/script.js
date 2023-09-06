class Vehicle {
    constructor(height, width, weight, color) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getWeight() {
        return this.weight;
    }

    getColor() {
        return this.color;
    }
}

class Car extends Vehicle {
    constructor(height, width, weight, color, numberOfDoors, maxPassengers) {
        super(height, width, weight, color);
        this.numberOfDoors = numberOfDoors;
        this.maxPassengers = maxPassengers;
    }

    getNumberOfDoors() {
        return this.numberOfDoors;
    }

    getMaxPassengers() {
        return this.maxPassengers;
    }
}

class Bike extends Vehicle {
    constructor(height, width, weight, color, numberOfWheels) {
        super(height, width, weight, color);
        this.numberOfWheels = numberOfWheels;
    }

    getNumberOfWheels() {
        return this.numberOfWheels;
    }
}

let vehicle1 = new Vehicle(150, 200, 1000, "red");
let car1 = new Car(140, 190, 1200, "blue", 4, 5);
let bike1 = new Bike(100, 50, 15, "black", 2);

console.log("Інформація про Vehicle:");
console.log("Висота:", vehicle1.getHeight());
console.log("Ширина:", vehicle1.getWidth());
console.log("Вага:", vehicle1.getWeight());
console.log("Колір:", vehicle1.getColor());

console.log("Інформація про Car:");
console.log("Висота:", car1.getHeight());
console.log("Ширина:", car1.getWidth());
console.log("Вага:", car1.getWeight());
console.log("Колір:", car1.getColor());
console.log("Кількість дверей:", car1.getNumberOfDoors());
console.log("Максимальна кількість пасажирів:", car1.getMaxPassengers());

console.log("Інформація про Bike:");
console.log("Висота:", bike1.getHeight());
console.log("Ширина:", bike1.getWidth());
console.log("Вага:", bike1.getWeight());
console.log("Колір:", bike1.getColor());
console.log("Кількість коліс:", bike1.getNumberOfWheels());
