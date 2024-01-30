// 2022-10-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = "";
for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j < input[1]; j++) {
        answer += "*";
    }
    answer += "\n"
}
console.log(answer)
