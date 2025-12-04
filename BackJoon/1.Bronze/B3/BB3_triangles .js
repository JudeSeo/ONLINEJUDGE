// 2022-08-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    let temp = [];
    for (let i = 0; i < v; i++) {
        for (let j = 0; j <= i; j++) {
            temp.push("*")
        }
        temp.push("\n")
    }
    answer.push(temp.join(""))
})
console.log(answer.join(""));
