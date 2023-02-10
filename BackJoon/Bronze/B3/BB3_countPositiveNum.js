// 2023-02-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => BigInt(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => BigInt(v));
let answer = 0;
input.forEach(v => {
    v > 0n ? answer++ : ""
})
console.log(answer);
