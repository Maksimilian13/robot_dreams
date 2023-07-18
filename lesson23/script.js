let array = [33, 42, 7, 17, 73, 4, 8, true, 23, 29];
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof(i) === 'number') {
    sum += array[i];
    }
}
console.log(' suma ' + sum);

let max = array[0];
for (let i of array) {
    if (typeof(i) === 'number') {
        if (max < i) {
            max=i;
        }
    }
}
console.log(' max ' + max);

let min = array[0];
for (let i of array) {
    if (typeof(i) === 'number') {
        if (min > i) {
            min=i;
        }
    }
}
console.log(' min ' + min);

let mas = ['', '#', '#', '#', '#'];
let d = '#';
for (let m = 0; m < mas.length; m++) {
    d += mas[m];
    console.log(d);
}

