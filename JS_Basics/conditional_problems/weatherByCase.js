function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let weatherStatus = ['sunny', 'rainy', 'cloudy'];
let status = weatherStatus[randomInteger(0,weatherStatus.length -1)];
console.log(status);

switch (status) {
    case 'sunny' :
        console.log(`It's a beautiful day because it's ${status}.`);
        break;
    case 'rainy' :
        console.log(`Grab an umbrella because it's ${status}.`);
        break;
    default :
        console.log(`Let's stay inside because it's ${status}.`);
};