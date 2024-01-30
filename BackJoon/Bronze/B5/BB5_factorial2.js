// 2023-05-16
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 1;
for (let i = 1; i <= input; i++) {
    answer *= i;
}
console.log(answer)