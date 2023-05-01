// 2023-05-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [n, a, b] = input[0].split(" ");
input = input[1].split("");
let temp = input.splice(a-1, b-a+1).reverse();
let answer = input.splice(0, a-1).join("");
answer += temp.join("");
answer += input.join("");
console.log(answer);