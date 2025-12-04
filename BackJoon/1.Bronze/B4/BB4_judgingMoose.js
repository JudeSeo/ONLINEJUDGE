// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
input.sort((a, b) => b - a);
let answer = [];
if (input[0] == 0 && input[1] == 0)
    answer.push("Not a moose");
else if (input[0] == input[1]) {
    answer.push("Even");
    answer.push(input[0] * 2);
} else {
    answer.push("Odd")
    answer.push(input[0] * 2);
}
console.log(answer.join(" "));
