let numberFirst = prompt('number1');
let numberSecond = prompt('number2');

function checking(value) {
    if (value === 0 || value) {
        return true;
    } else {
        return false;
    }
}

function addition(a,b) {
    if (checking(a) && checking(b)) {
        return a + b;
    } else {
        return 'Error';    
    }
}
let x = addition(+numberFirst,+numberSecond);

console.log('addition ' + x);
alert('addition ' + x);


let subtrasction = function(a,b) {
    if (checking(a) && checking(b)) {
        console.log('subtrasction ' + (a - b));
        alert('subtrasction ' + (a - b));
    } else {
        console.log('subtrasction Error');
        alert('subtrasction Error');
    }
}

subtrasction(+numberFirst,+numberSecond);


function multiplication(a,b) {
    if (checking(a) && checking(b)) {
        console.log('multiplication ' + (a * b));
        alert('multiplication ' + (a * b));
    } else {
        console.log('multiplication Error');
        alert('multiplication Error');
    }
}

multiplication(+numberFirst,+numberSecond);


let division = (a,b) => {
    if (checking(a) && checking(b)) {
        console.log('division '+ (a / b));
        alert('division '+ (a / b));
    } else {
        console.log('division Error');
        alert('division Error');
    }
}

division(+numberFirst,+numberSecond);


let array = [33, 42, 7, 17, 73, 4, 8, true, 23, 29];
console.log(array);

function findMax(array) {
    let max = array[0];
    for (let i of array) {
        if (typeof(i) === 'number') {
            if (max < i) {
            max = i;
            }
        }
    }
    return max;
}
console.log('max ' + findMax(array));

function findMin(array) {
    let min = array[0];
    for (let i of array) {
        if (typeof(i) === 'number') {
            if (min > i) {
            min = i;
            }
        }
    }
    return min;
}
console.log('min ' + findMin(array));


