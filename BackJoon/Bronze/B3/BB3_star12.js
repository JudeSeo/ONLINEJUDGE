// 2022-09-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v))[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    let temp = "";
    for (let k = 0; k < input - i; k++) {
        temp += " ";
    }
    for (let j = 0; j < i; j++) {
        temp += "*"
    }
    answer.push(temp)
}
for (let i = input - 1; i > 0; i--) {
    let temp = "";
    for (let k = 0; k < input - i; k++) {
        temp += " ";
    }
    for (let j = 0; j < i; j++) {
        temp += "*"
    }
    answer.push(temp)
}

console.log(answer.join("\n"));