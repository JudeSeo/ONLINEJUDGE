//2022-07-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let temp = input * 5 - 400;
let answer = [temp];
if (temp > 100)
    answer.push(-1)
else if (temp < 100)
    answer.push(1)
else
    answer.push(0);
console.log(answer.join("\n"));
