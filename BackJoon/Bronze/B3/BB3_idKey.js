// 2023-04-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("").map(val => Number(val));
    let sum = 0;
    temp.map(val => sum += val)
    let n2 = ("" + temp[10] + temp[11] + temp[12]) * 10
    n2 = n2 < 1000 ? n2 + 1000 : n2
    let id = (sum + n2).toString()
    answer.push(id.length > 4 ? id.slice(id.length - 4) : id)
})
console.log(answer.join("\n"))