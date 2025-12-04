// 2022-04-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
let sum = 0;
for (let i = input[0]; i <= input[1]; i++) {
    if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
        sum += i
        answer.push(i)
    }
}
if (sum == 0)
    console.log(-1);
else {
    console.log(sum);
    console.log(answer[0]);
}