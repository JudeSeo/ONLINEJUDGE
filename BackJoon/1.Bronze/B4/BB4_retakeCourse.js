// 2024-09-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
let course = input.splice(0, 1)[0].slice(0, 5);
input.slice(1).forEach(v => {
    let temp = v.slice(0, 5);
    if (temp == course) answer++;
})
console.log(answer);