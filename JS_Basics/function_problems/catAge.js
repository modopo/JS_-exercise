function catAge(years) {
    switch (years) {
        case 0 : return 0;
        case 1 : return 15;
        case 2 : return 24;
        default :
            return 24 + (years - 2) * 4;
    };
}

console.log(catAge(4));