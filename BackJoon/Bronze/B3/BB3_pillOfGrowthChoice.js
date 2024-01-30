// 2023-03-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = 0
if (input >= 200 && input < 206)
    answer = 1;
else if (input >= 206 && input < 218)
    answer = 2;
else if (input >= 218 && input < 229)
    answer = 3;
else
    answer = 4;
console.log(answer)
