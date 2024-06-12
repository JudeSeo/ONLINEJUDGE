// 2024-06-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let score = {
    miss: 0,
    bad: 200,
    cool: 400,
    great: 600,
    perfect: 1000
}
let answer = input[0] * score[input[1]]
console.log(answer);