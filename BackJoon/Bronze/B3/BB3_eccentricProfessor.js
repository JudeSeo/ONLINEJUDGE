// 2023-04-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val))
    let pare = temp[0] + temp[1] * temp[3];
    let seri = temp[1] * temp[2];
    answer.push(pare > seri ? "do not parallelize" : pare < seri ? "parallelize" : "does not matter")
})
console.log(answer.join("\n"));
