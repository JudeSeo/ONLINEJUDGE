// 2024-10-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r')[0];
let answer = input[0];
for (let i = 1; i < input.length; i++) {
    if (input[i] == input[i - 1]) continue;
    answer += input[i]
}
console.log(answer);