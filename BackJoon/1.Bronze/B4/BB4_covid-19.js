// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = "Yellow";
if (input[0] <= 50 && input[1] <= 10)
    answer = "White";
else if (input[1] > 30)
    answer = "Red"
console.log(answer);
