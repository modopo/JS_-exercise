let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let index = 0; index < scores.length; index++) {
    if (scores[index] >= 100)
        count++;
};

console.log(count);
