// 2023-02-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let h = (temp[0] + temp[4]);
    let m = (temp[1] + temp[5]);
    let a = (temp[2] + temp[6]);
    let d = (temp[3] + temp[7]);
    answer.push((h < 0 ? 1 : h) + (m < 0 ? 1 : m) * 5 + (a < 0 ? 0 : a) * 2 + d * 2);
})
console.log(answer.join("\n"))