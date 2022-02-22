// 2022-02-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = parseInt(input[0]);
let answer = 1;
while (num > 0) {
    answer *= num;
    num -= 1;
}

console.log(answer);
