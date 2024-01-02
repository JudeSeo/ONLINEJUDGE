// 2024-01-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = 10;
for (let i = 0; i < input.length - 1; i++) {
    if (input[i] != input[i + 1]) answer += 10;
    else answer += 5;
}
console.log(answer);