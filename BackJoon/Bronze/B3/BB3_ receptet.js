// 2023-03-31
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let source = temp[1] - temp[0];
    if (source > 0) answer += (source * temp[2]);
})
console.log(answer);
