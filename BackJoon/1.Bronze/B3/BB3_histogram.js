// 2022-09-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
input = input.slice(1);
let answer = [];
input.forEach(v => {
    let str = "";
    for (let i = 0; i < v; i++) {
        str += "="
    }
    answer.push(str)
})
console.log(answer.join("\n"));