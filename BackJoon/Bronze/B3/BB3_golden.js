// 2023-03-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (parseInt((temp[0] / temp[1]) * 100) == parseInt(((1 + Math.sqrt(5)) / 2) * 100)) answer.push("golden");
    else answer.push("not")
})
console.log(answer.join("\n"))
