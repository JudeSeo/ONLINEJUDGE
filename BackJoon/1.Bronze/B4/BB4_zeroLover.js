// 2023-08-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
while (input.lastIndexOf("0") == input.length - 1) {
    input = input.slice(0, input.length - 1);
}
let answer = input.filter(v => v == "0").length;
console.log(answer);