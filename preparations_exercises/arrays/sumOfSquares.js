let array = [3, 5, 7];

function sumOfSquares(array) {
    return array.reduce((accumulator, number) => {
        return accumulator + number * number;
    });
}

console.log(sumOfSquares(array)); // => 83