let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`)

for (let future = 10; future < 50; future += 10) {
    console.log(`In ${future} years, you will bee ${age + future} years old.`)
}
