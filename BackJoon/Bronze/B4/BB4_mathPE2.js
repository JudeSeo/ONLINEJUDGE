// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
if (input % 8 == 0)
    answer = 2
else if (input % 8 == 7)
    answer = 3;
else if (input % 8 == 6)
    answer = 4;
else
    answer = input % 8
console.log(answer)
