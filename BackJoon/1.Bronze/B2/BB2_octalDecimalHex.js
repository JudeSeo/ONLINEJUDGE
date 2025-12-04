// 2023-12-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = 0;
if (input[0] == "0") {
    if (input[1] == "x") {
        answer = parseInt(input.slice(2).join(""), 16)
    } else {
        answer = parseInt(input.slice(1).join(""), 8)
    }
} else {
    answer = input.join("")
}
console.log(answer);