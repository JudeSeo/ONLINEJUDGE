// 2023-03-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
if ((input[2] - input[0]) / input[1] < 0)
    answer = "X"
else if ((input[2] - input[0]) / input[1] == parseInt((input[2] - input[0]) / input[1]))
    answer = (input[2] - input[0]) / input[1] + 1
else
    answer = "X"
console.log(answer)