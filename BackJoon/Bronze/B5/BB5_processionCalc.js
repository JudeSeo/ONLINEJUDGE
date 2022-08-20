// 2022-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = Number(input[0].split(" ")[0]);
let a = input.slice(1, num + 1);
let b = input.slice(1 + num);
let answer = [];
a.forEach((v, i) => {
    let tempA = v.split(" ").map(v => Number(v));
    let tempB = b[i].split(" ").map(v => Number(v));
    let tempAnswer = []
    tempA.forEach((value, index) => {
        tempAnswer.push(value + tempB[index]);
    })
    answer.push(tempAnswer.join(" ") + "\n");
})
console.log(answer.join(""));
