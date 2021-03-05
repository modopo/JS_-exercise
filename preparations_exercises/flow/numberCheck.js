let numberRange = (input) => {
    if (input < 0) {
        console.log(`${input} is less than 0`);
    } else if (input <= 50) {
        console.log(`${input} is between 0 and 50`);
    } else if (input > 50 && input <= 100) {
        console.log(`${input} is between 51 and 100`);
    } else if (input > 100) {
        console.log(`${input} is greater than 100`);
    }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);