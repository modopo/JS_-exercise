let rlSync = require('readline-sync');
let prompt = Number(rlSync.question("Input a number: "));

function factorial(number) {
    let result = 1;
    for (n = number; n > 0; n -= 1) {
        result *= n;
    }

    return result;
}

console.log(factorial(prompt));