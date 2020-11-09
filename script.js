 const decimal = document.getElementById("decimal");
 const clear = document.getElementById("clear");
 
 const displayElement = document.getElementById("display_numbers");
 
 const Numbers = document.getElementsByClassName("btn--number");
 
 const Operators = document.getElementsByClassName("btn--operator");

 var displayVal = '0';
 var temp;  
 var evalStringArray = []; 
 
 updateDisplayVal = (e) => {
     var btnText = e.target.innerText;
     if(displayVal === "0") { 
     displayVal = ""; 
     }

     displayVal += btnText; 
     displayElement.innerText = displayVal;
 } 

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
             displayVal = evaluation + ''; 
             console.log(typeof displayVal);
             displayElement.innerText = displayVal;
             evalStringArray = [];
             break;
         default:
             break;
     }
 }

 for (let i = 0; i < Numbers.length; i++) {
     Numbers[i].addEventListener('click', updateDisplayVal);
 }

 for (let i = 0; i < Operators.length; i++) {
     Operators[i].addEventListener('click', performOperation);
 }

 clear.onclick = () => {
     displayVal = '0';
     temp = undefined;
     evalStringArray = [];
     displayElement.innerHTML = displayVal;
 }

 decimal.onclick = () => { 
     if(!displayVal.includes('.')) {
         displayVal += '.';
     }
     displayElement.innerText = displayVal;
 }





    