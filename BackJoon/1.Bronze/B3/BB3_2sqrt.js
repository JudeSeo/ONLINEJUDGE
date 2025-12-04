// 2023-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = 0
if (Math.sqrt(input) == parseInt(Math.sqrt(input)))
    answer = 1;
else if (Math.sqrt(input * 2) == parseInt(Math.sqrt(input * 2))) {
    answer = 1;
}
console.log(answer);
