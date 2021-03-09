let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
    return array.reduce((filteredLengthArray, letters) => {
        if (letters.length % 2 === 1) {
            filteredLengthArray.push(letters.length);
        }
        return filteredLengthArray;
    }, []);
};

console.log(oddLengths(arr)); // => [1, 5, 3]