// 2023-09-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let price = input[0].split(" ").sort((a, b) => a - b);
let honey = input[1].split(" ").sort((a, b) => a - b);
let answer = 0n;
price.forEach((v, i) => {
    answer += (BigInt(v) * BigInt(honey[i]))
})
console.log(answer.toString());