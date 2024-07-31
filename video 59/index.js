/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let random = Math.random();
console.log(random);
let num1 = prompt("Enter First Number");
let operation = prompt("Enter Operation");
let num2 = prompt("Enter Second Number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
};

if (random > 0.1) {
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
} else {
    operation = obj[operation];
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
   
}