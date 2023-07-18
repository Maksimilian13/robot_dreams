let numberFirst = prompt('number1');
let numberSecond = prompt('number2');

let comparison2 = +numberFirst > +numberSecond;
let comparison1 = +numberFirst < +numberSecond;
let additionResult = +numberFirst + +numberSecond;
let subtractionResult = numberFirst - numberSecond;
let multiplicationResult = numberFirst * numberSecond;
let divisionResult = numberFirst / numberSecond;

if(numberFirst === '' || numberSecond === '') {
    alert('error');
}    
else if(comparison1) {
     alert('Are you sure you want to continue');
     alert(' AdditionResult ' + additionResult);
     alert(' Subtraction ' + subtractionResult);
     alert(' Multiplication ' + multiplicationResult);
     alert(' Division ' + divisionResult);
    }
    else if(+numberSecond === 0) {
        alert(' AdditionResult ' + additionResult);
        alert(' Subtraction ' + subtractionResult);
        alert(' Multiplication ' + multiplicationResult);
        alert(' Division ' + ' error');
        }
        else if(comparison2 && +numberFirst > 0 && +numberSecond > 0) {
            alert(' AdditionResult ' + additionResult);
            alert(' Subtraction ' + subtractionResult);
            alert(' Multiplication ' + multiplicationResult);
            alert(' Division ' + divisionResult);
            }
   

    
   

       
   


       
   
 

       
            

 


