// 2023-08-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
for (let i = 0; i < 3; i++) {
    let num = input.splice(0, 1)[0];
    if (!input.includes(num)) answer = num
    else num = input.splice(input.indexOf(num), 1)
}
console.log(answer);
