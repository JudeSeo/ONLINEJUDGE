// 2022-11-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v))[0];
let answer = 0;
if (input % 2 == 1)
    answer = 0;
else {
    if (input % 4 == 0)
        answer = 2
    else
        answer = 1;
}
console.log(answer);