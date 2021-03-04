let rlSync = require('readline-sync');
let number = rlSync.question('Enter a number: ');

if (!Number(number)) {
    console.log('not a number');
} else if (number % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}