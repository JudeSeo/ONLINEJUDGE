// 2023-09-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let binus = input[0].split(" ").map(v => Number(v));
let oppon = input[1].split(" ").map(v => Number(v));
for (let i = 0; i < binus.length; i++) {
    if (binus[i] > oppon[i]) answer += 3;
    else if (binus[i] == oppon[i]) answer += 1;
}
console.log(answer);