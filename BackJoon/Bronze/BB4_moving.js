// 2022-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
if (input[0]+input[1]<input[2]+0.5)
    console.log(1);
else
    console.log(0)
