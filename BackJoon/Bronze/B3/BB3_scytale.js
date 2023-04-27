// 2023-04-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = "";
let num = input.splice(0, 1);
input = input[0].split("");
input.forEach((v, i) => {
    if (i % num == 0)
        answer += v
})
console.log(answer);
