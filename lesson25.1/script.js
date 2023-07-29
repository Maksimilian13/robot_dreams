let order = {
    //name: 'Maksym'
};

function isEmptyObj(objest) {
    for(let key in objest) {
        return false;
    }    
    return true;
}
console.log(isEmptyObj(order));


//Другий варіант мені більше подобається, але ми не вчили цього методу
function isEmptyObj2(objest) {
    for(let key in objest) {
        if(objest.hasOwnProperty(key)) {
        return false;
        }  
    }  
    return true;
}
console.log(isEmptyObj2(order));

let user = {
    name: 'Maksym',
    age: 29,
    sayHello: function() {
        console.log('Привіт, я ' + this.name + ', мені ' + this.age + ' років');
    }
}
user.sayHello();

let calculatorr = {
    num1: null,
    num2: null,
    ask: function() {
        num1 = prompt('number1');
        num2 = prompt('number2');
        console.log(num1, num2);
    },
    sum: function() {
        console.log(+num1 + +num2);
    },
    mul: function() {
        console.log(num1 * num2);
    }
}
calculatorr.ask();
calculatorr.sum();
calculatorr.mul();