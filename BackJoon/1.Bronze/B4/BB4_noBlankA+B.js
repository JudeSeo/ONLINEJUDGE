// 2022-07-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
if (input.indexOf("10") >= 0) {
    input = input.replace("10", "");
    answer = Number(input) + 10
} else {
    input = input.split("").map(v => Number(v))
    answer = Number(input[0]) + Number(input[1]);
}
console.log(answer);
