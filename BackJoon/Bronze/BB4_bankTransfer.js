// 2022-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 25;
answer += (input * 0.01);
if (answer < 100)
    answer = 100;
else if (answer > 2000)
    answer = 2000
console.log(answer.toFixed(2));
