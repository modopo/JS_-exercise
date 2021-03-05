function allCaps (input) {
    if (input.length > 10) {
        return input.toUpperCase();
    } else {
        return input;
    }
}

let secondAllCaps = (input) => {
    if (input.length > 5) {
        return input.toUpperCase();
    } else {
        return input;
    }
}

let thirdAllCaps = function(input) {
    if (input.length > 15) {
        return input.toUpperCase();
    } else {
        return input;
    }
}

console.log(allCaps("hello my name is modopo"));
console.log(allCaps("goodbye"));
console.log(secondAllCaps("hello "));
console.log(thirdAllCaps("this is just a test statement"));
