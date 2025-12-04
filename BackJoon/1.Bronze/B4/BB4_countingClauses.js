// 2022-08-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = "unsatisfactory"
if (input[0].split(" ")[0] >= 8)
    answer = "satisfactory"
console.log(answer);