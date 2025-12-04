// 2022-07-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = "answer"
if (input[0] == 8 || input[0] == 9) {
    if (input[1] == input[2]) {
        if (input[3] == 8 || input[3] == 9)
            answer = "ignore";
    }
}
console.log(answer);
