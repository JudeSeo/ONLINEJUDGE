// 2024-09-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let cnt = 0;
input[0].split("").map(v => Number(v)).forEach(v => {
    if (v % 2 == 0) cnt++;
})
let answer = 0;
if (cnt * 2 == num) answer = -1;
else if (cnt * 2 < num) answer = 1;
console.log(answer);