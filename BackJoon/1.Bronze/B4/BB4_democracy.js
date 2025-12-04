// 2024-07-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
input.forEach(v => {
    let temp = v.split("");
    let o = temp.filter(val => val == "O").length;
    let x = temp.filter(val => val == "X").length;
    if (o > x) answer++;
})
console.log(answer);