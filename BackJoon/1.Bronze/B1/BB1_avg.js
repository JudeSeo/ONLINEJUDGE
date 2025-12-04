// 2022-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let length = input[0]
input = input.slice(1)
input = input[0].split(" ")
input.sort((a, b) => {
    return b - a
});
let max = input[0];
let newScore = [];
let sum = 0;
for (let i = 0; i < length; i++) {
    newScore.push(input[i] / max * 100);
    sum += newScore[i];
};

console.log(parseFloat(sum / length))