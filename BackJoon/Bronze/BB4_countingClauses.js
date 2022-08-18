// 2022-08-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = "unsatisfactory"
if (input[0].split(" ")[0] >= 8)
    answer = "satisfactory"
console.log(answer);