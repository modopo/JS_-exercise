function capt(phrase) {
    let splits = phrase.split(' ');
    let result = [];

    splits.forEach(word => {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    });

    return(result.join(' '));

};

console.log(capt('launch school tech & talk'));