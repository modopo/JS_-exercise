function repeat(number, phrase) {
    let result = "";
    for (let count = 0; count < number; count++) {
        result += phrase;
    };

    console.log(result);
    return result;
};

repeat(3, "ha");

