 // Selectors
 const decimal = document.getElementById("decimal");
 const clear = document.getElementById("clear");
 // Selects the h1 tag that holds the input and result
 const displayElement = document.getElementById("display_numbers");
 // Selects the 10 digits (0-9)
 const Numbers = document.getElementsByClassName("btn--number");
 // Selects the four operators (add/subtract/divide/multiply) and also the equals operator
 const Operators = document.getElementsByClassName("btn--operator");

 // Value that is being shown. The default value is 0. The eval() method will take a string and run it. Our array will hold the buttons we are clicking, and we will later convert it to a string.
 var displayVal = '0';
 var temp;  
 var evalStringArray = []; 
 
 // Updating the display field. If the value is currently equal to 0, we will reset the value so that our input does not start with a 0.
 updateDisplayVal = (e) => {
     var btnText = e.target.innerText;
     if(displayVal === "0") { 
     displayVal = ""; 
     }

     // Append the content of the button we clicked to our displayVal variable and display it
     displayVal += btnText; 
     displayElement.innerText = displayVal;
 } 


 // Perform the mathematical operations
 performOperation = (e) => {
 var operator = e.target.innerText;  
 
     switch (operator) {
         case '+':
            temp = displayVal;
             displayVal = '0';
             displayElement.innerText = displayVal;
             evalStringArray.push(temp);
             evalStringArray.push('+');
             break;
         case '-':
            temp = displayVal;
             displayVal = '0';
             displayElement.innerText = displayVal;
             evalStringArray.push(temp);
             evalStringArray.push('-');
             break;
         case '×':
            temp = displayVal;
             displayVal = '0';
             displayElement.innerText = displayVal;
             evalStringArray.push(temp);
             evalStringArray.push('*');
             break;
         case '÷':
            temp = displayVal;
             displayVal = '0';
             displayElement.innerText = displayVal;
             evalStringArray.push(temp);
             evalStringArray.push('/');
             break;
         case '=':
             evalStringArray.push(displayVal);
             var evaluation = eval(evalStringArray.join(' '));
             // convert datatype from number to string
             displayVal = evaluation + ''; 
             console.log(typeof displayVal);
             displayElement.innerText = displayVal;
             evalStringArray = []; // clear the array
             break;
         default:
             break;
     }
 }

 // Event listeners for the number and operator buttons
 for (let i = 0; i < Numbers.length; i++) {
     Numbers[i].addEventListener('click', updateDisplayVal);
 }

 for (let i = 0; i < Operators.length; i++) {
     Operators[i].addEventListener('click', performOperation);
 }

 // On clicking the clear button, all values and the display are being reset 
 clear.onclick = () => {
     displayVal = '0';
     temp = undefined;
     evalStringArray = [];
     displayElement.innerHTML = displayVal;
 }

 // Not allowing two decimal points in input
 decimal.onclick = () => { 
     if(!displayVal.includes('.')) {
         displayVal += '.';
     }
     displayElement.innerText = displayVal;
 }





    