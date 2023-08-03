let div1 = document.getElementById('test1');
let div2 = document.getElementById('test2');
let div3 = document.getElementById('test3');
let div4 = document.getElementById('test4');
let div5 = document.getElementById('test5');
let div6 = document.getElementById('test6');


let numberFirst = prompt('number1');
let numberSecond = prompt('number2');

function checking(value) {
    if (typeof value === 'number' && !isNaN(value)) {
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

function checkingTheResult1(t) {
    if(t > 0) {
    return div1.append('addition ' + t),
           div1.style.color = 'green';
    } else {
    return div1.append('addition ' + t),
           div1.style.color = 'red';
    }
}
let xx = checkingTheResult1(x);
console.log('addition ' + x);



function subtrasction(a,b) {
    if (checking(a) && checking(b)) {
    return a - b;
    } else {
    return 'Error';    
    }
}
let n = subtrasction(+numberFirst,+numberSecond);

function checkingTheResult2(t) {
    if(t > 0) {
    return div2.append('subtrasction ' + t),
           div2.style.color = 'green';
    } else {
    return div2.append('subtrasction ' + t),
           div2.style.color = 'red';
    }
}
let nn = checkingTheResult2(n);
console.log('subtrasction ' + n);


function  multiplication(a,b) {
    if (checking(a) && checking(b)) {
    return a * b;
    } else {
    return 'Error';    
    }
}
let m =  multiplication(+numberFirst,+numberSecond);

function checkingTheResult3(t) {
    if(t > 0) {
    return div3.append('multiplication ' + t),
           div3.style.color = 'green';
    } else {
    return div3.append('multiplication ' + t),
           div3.style.color = 'red';
    }
}
let mm = checkingTheResult3(m);
console.log('multiplication ' + m);


function  division(a,b) {
    if (checking(a) && checking(b)) {
    return a / b;
    } else {
    return 'Error';    
    }
}
let c =  division(+numberFirst,+numberSecond);

function checkingTheResult4(t) {
    if(t > 0) {
    return div4.append('division ' + t),
           div4.style.color = 'green';
    } else {
    return div4.append('division ' + t),
           div4.style.color = 'red';
    }
}
let cc = checkingTheResult4(c);
console.log('division ' + c);


let array = [33, 42, 7, 17, 73, 4, 8, 48, 23, 29];
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

let arrayContainer = document.getElementById('container');

array.forEach(function(element) {
    let div = document.createElement('div');

    div.innerHTML = `<h3>${element}</h3>`;

    let darkness = 255 - element;
    let color = `rgb(${darkness}, ${darkness}, ${darkness})`;
    div.style.backgroundColor = color;

    arrayContainer.append(div);
});




