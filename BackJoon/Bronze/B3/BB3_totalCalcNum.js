// 2022-12-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = input[0];
let num = parseInt(input[0] / input[1]);
while (num > 0) {
    answer += num;
    num = parseInt(num / input[1])
}
console.log(answer)