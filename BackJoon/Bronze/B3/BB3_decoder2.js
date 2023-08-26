// 2023-08-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ");
let answer = input[0].split("")[0];
for (let i = 1; i < input.length; i++) {
    let len = input[i - 1].length;
    if (input[i].length < len)
        answer += " "
    else answer += input[i].split("")[len-1]
}
console.log(answer);