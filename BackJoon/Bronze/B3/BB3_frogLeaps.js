// 2023-10-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
for (let i = 0; i < input.length - 1; i++) {
    answer += ((input[i] - input[i + 1]) ** 2)
}
console.log(answer);