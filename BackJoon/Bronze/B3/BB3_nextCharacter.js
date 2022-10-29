// 2022-10-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input[1].split("")
for (let i = 1; i < input.length; i++) {
    if (input[i] == "J")
        answer.push(input[i - 1])
}
console.log(answer.join("\n"))