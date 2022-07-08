// 2022-07-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = "Special";
if (input[0] > 2)
    answer = "After"
else if (input[0] < 2)
    answer = "Before"
else {
    if (input[1] > 18)
        answer = "After"
    else if (input[1] < 18)
        answer = "Before"
}

console.log(answer);