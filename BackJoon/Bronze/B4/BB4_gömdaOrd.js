// 2023-11-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = "";
for (let i = 0; i < input.length;) {
    let num = input[i].charCodeAt() - 64
    answer += input[i];
    i += num;
}
console.log(answer);