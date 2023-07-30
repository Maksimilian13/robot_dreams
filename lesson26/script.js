function Accumulator(number) {
    this.number = number;
}

Accumulator.prototype.increment = function() {
    console.log(this.number + 1);
};
Accumulator.prototype.decrement = function() {
    console.log(this.number - 1);
};

let num = +prompt('number');
let accumulator = new Accumulator(num);

console.log(accumulator);
accumulator.increment();
accumulator.decrement();

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
    this.clear = function() {
        console.log(num);
    };
}
CancelableAccumulator.prototype = Accumulator.prototype;
let num2 = +prompt('number');
let cancelableAccumulator = new CancelableAccumulator(num2);

console.log(cancelableAccumulator);
cancelableAccumulator.increment();
cancelableAccumulator.decrement();
cancelableAccumulator.clear();

