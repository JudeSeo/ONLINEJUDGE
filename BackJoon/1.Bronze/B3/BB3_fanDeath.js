// 2023-02-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
for (let i = 1; i <= input; i++) {
    answer += input % i == 0 ? i : 0
}
console.log(answer * 5 - 24)
