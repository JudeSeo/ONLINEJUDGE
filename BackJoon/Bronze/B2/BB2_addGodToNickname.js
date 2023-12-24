// 2023-12-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    temp[0] = "god";
    answer.push(temp.join(""));
})
console.log(answer.join("\n"));