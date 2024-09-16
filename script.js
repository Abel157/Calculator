const input=document.querySelector(".input");

const clear=document.querySelector("#clear");
const key=document.querySelectorAll(".key");
const operator=document.querySelectorAll(".opr");
const equals=document.querySelector(".calculate");
function calculate(){
   const result= operate(expression[1],expression[0],expression[2]);
   input.textContent=result;
   expression.splice(0,3);
   expression[0]=result;
   count=0;
}
equals.addEventListener('click', calculate);
const keyArr=Array.from(key);
let expression=new Array(3);
let count=0;
let number="";
input.textContent="0";
keyArr.forEach(element => {
    if (count <=2){
        element.addEventListener('click',(e)=>{
            if (!element.classList.contains("opr")){
                number+=element.textContent;
                expression[count]=number;
                input.textContent=number;
            }
            else{
                if (expression.includes("+")||expression.includes("-")||expression.includes("*")||expression.includes("/")){
                    calculate();
                }
                number="";
                count++;
                expression[count]=element.textContent;
                count++;
                
            }
        });
    }
});
clear.addEventListener("click",()=>{
    number="";
    input.textContent="0"
    expression.splice(0,3);
    count=0;
})
let num1;
let num2;
let opr;
function add(a,b){
    return a+b;
};
function subtract(a,b){
    return (a-b);
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};
 function operate (opr, num1, num2){
    num1=+num1;
    num2=+num2;
    switch (opr){
        case '+':
            return add(num1,num2);
        case '-':
           return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
            
    }

 }