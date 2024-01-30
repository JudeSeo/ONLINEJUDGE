// 2022-11-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("").map(v => Number(v));
let code = [2, 7, 6, 5, 4, 3, 2]
let sum = 0;
input.forEach((v, i) => {
    sum += (v * code[i])
})
let answerCode = ["J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "Z"];
console.log(answerCode[sum % 11])