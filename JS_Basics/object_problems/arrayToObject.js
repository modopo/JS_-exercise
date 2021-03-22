let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let obj = {}
for (let index = 0; index < nestedArray.length; index++) {
    obj[nestedArray[index][0]] = nestedArray[index][1]; 
}

console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }