let numberFirst = prompt('number1');
let numberSecond = prompt('number2');

//let number1 = Number(numberFirst);
//let number2 = Number(numberSecond);
let comparison = +numberFirst < +numberSecond

let additionResult = +numberFirst + +numberSecond;
if(numberFirst === '' || numberSecond === '') {
    alert('error');
}
else if(comparison) {
        alert('Are you sure you want to continue');
        alert(' AdditionResult ' + additionResult);
    } 
    else alert(' AdditionResult ' + additionResult); 
 
let subtractionResult = numberFirst - numberSecond;
if(numberFirst === '' || numberSecond === '') {
    alert('error');
}
else if(comparison) {
        alert('Are you sure you want to continue');
        alert(' Subtraction ' + subtractionResult);
    }
    else alert(' Subtraction ' + subtractionResult);

let multiplicationResult = numberFirst * numberSecond;
if(numberFirst === '' || numberSecond === '') {
    alert('error');
}
else if(comparison) {
        alert('Are you sure you want to continue');
        alert(' Multiplication ' + multiplicationResult);
    }     
    else alert(' Multiplication ' + multiplicationResult);

let divisionResult = numberFirst / numberSecond;
if(numberFirst === '' || numberSecond === '') {
    alert('error');
}
else if(+numberSecond === 0) {
        alert('error');
    }
    else if(comparison) {
            alert('Are you sure you want to continue');
            alert(' Division ' + divisionResult);
        }
        else  alert(' Division ' + divisionResult);

