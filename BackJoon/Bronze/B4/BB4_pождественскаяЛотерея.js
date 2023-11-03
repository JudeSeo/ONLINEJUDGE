// 2023-11-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [num, luble] = input.splice(0, 1)[0].split(" ");
let answer = 0;
input[0].split(" ").forEach(v => {
    answer += Math.floor(v / luble);
})
console.log(answer);