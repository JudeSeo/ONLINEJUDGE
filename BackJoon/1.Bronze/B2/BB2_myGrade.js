// 2024-03-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = ""
let grade = {
    "A+": 5,
    "A0": 15,
    "B+": 30,
    "B0": 35,
    "C+": 45,
    "C0": 48,
    "F": 50,
}
let score = input[0].split(" ").map(v => Number(v)).sort((a, b) => b - a);
let num = score.findIndex(v => v == input[1]) + 1;
let key = Object.keys(grade);
for (let i = 0; i < key.length; i++) {
    let value = grade[key[i]];
    if (value >= num) {
        answer = key[i];
        break;
    }
}
console.log(answer);