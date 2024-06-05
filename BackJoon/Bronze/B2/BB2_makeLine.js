// 2024-06-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)[0].split(" ");
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1)[0].split(" ");
let answer = [];
input.forEach((v, i) => {
    let arr = answer.splice(v);
    answer.push(i+1);
    answer.push(...arr);
})
console.log(answer.reverse().join(" "));
