// 2023-07-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let d = 0;
let p = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] == "D") d++;
    if (input[i] == "P") p++
    if (Math.abs(d - p) >= 2) break;
}
console.log(`${d}:${p}`)