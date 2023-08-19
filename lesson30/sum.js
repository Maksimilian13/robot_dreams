
function checking(value) {
  if (typeof(value) === 'number' && !isNaN(value)) {
      return true;
  } else {
      return false;
  }
}

function addition(a,b) {
  if (checking(a) && checking(b)) {
      return a + b;
  } else {
      return 'Error';    }
}
let x = addition();
console.log('addition' + x);

function subtrasction(a,b) {
  if (checking(a) && checking(b)) {
      return a - b;
  } else {
      return 'Error';    }
}
let g = subtrasction();
console.log('subtrasctionn' + x);

let array = [33, 42, 7, 17, 73, 4, 8, true, 23, 29];

function findMax(array) {
    let max = array[0];
    for (let i of array) {
        if (typeof(i) === 'number' && !isNaN(i)) {
            if (max < i) {
            max = i;
            }
        }
    }
    return max;
}
console.log(findMax);

function findMin(array) {
    let min = array[0];
    for (let i of array) {
        if (typeof(i) === 'number' && !isNaN(i)) {
            if (min > i) {
            min = i;
            }
        }
    }
    return min;
}
console.log(findMin);

function Accumulator(number) {
  this.number = number;
}

Accumulator.prototype.increment = function() {
  return this.number + 1;
};
Accumulator.prototype.decrement = function() {
  return this.number - 1;
};

let num = 16;
let accumulator = new Accumulator(num);

accumulator.increment();
accumulator.decrement();

function CancelableAccumulator(number) {
  Accumulator.call(this, number);
  this.clear = function() {
      return this.number;
  };
}
CancelableAccumulator.prototype = Accumulator.prototype;
let num2 = 15;
let cancelableAccumulator = new CancelableAccumulator(num2);

console.log(cancelableAccumulator);
cancelableAccumulator.increment();
cancelableAccumulator.decrement();
cancelableAccumulator.clear();

module.exports = {
  accumulator: Accumulator,
  cancelableAccumulator: CancelableAccumulator,
  checking: checking,
  findMax: findMax,
  findMin: findMin,
  addition: addition,
  subtrasction: subtrasction
};