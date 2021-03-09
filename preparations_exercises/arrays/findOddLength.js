let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
    let len = array.map(item => item.length);
    return len.filter(item => item % 2 !== 0)
}

console.log(oddLengths(arr)); // => [1, 5, 3]