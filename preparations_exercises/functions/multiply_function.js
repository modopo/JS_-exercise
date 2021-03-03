function getNumber(prompt) {
    let rlSync = require('readline-sync');
    let number = rlSync.question(prompt);
    return Number(number);
}

function multiply(a, b) {
    return a * b;
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");
let answer = multiply(firstNumber, secondNumber)
console.log(`${firstNumber} * ${secondNumber} = ${answer}`);