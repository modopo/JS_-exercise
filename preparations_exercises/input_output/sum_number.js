let rlSync = require('readline-sync');
let firstNumber = Number(rlSync.question("Provide the first numbers: "));
let secondNumber = Number(rlSync.question("Provide the second number: "));
let sum = firstNumber + secondNumber;

console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}!`);