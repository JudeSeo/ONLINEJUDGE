// 2023-04-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let chrono = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
let answer = [];
input.forEach(v => {
    let sum = 0;
    let temp = v.replaceAll(" ", "").split("").map(val => {
        if (chrono[val] != undefined) sum += chrono[val];
    });
    answer.push(sum);
})
console.log(answer.join("\n"))