// 2023-01-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [], sum = 0, min = 100;
input.forEach(v => {
    if (v % 2 == 1) {
        sum += v;
        min = Math.min(min, v);
    }
})
if (sum == 0) console.log(-1)
else console.log(`${sum}
${min}`)