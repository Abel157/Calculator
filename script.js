const input=document.querySelector(".input");
const output=document.querySelector(".output");
const clear=document.querySelector("#clear");
const key=document.querySelectorAll(".key");
const operator=document.querySelectorAll(".opr");
const keyArr=Array.from(key);
let expression=[];
keyArr.forEach(element => {
    element.addEventListener('click',(e)=>{
        expression.push(element.textContent);
        input.textContent=expression.join('');
    });
});
clear.addEventListener("click",()=>{
    input.textContent="";
    expression.splice(0,expression.length);
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
 function operate (opr){
    switch (opr){
        case '+':
            add();
            break
        case '-':
            subtract();
            break
        case '*':
            multiply();
            break
        case '/':
            divide();
            
    }

 }