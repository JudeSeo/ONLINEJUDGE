// 2022-07-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
let answer = "T";
let apple = input[0] * 3 + input[1] * 2 + input[2]
let banana = input[3] * 3 + input[4] * 2 + input[5]
if (apple > banana)
    answer = "A";
else if (apple < banana)
    answer = "B";
console.log(answer);
