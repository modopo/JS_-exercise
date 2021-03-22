function isBlank(phrase) {
    return phrase.trim().length === 0;
}

console.log(isBlank('     '));
console.log(isBlank(''));
