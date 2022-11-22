// 2022-11-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input[0].split("").forEach(v => {
    if (input[1].split(" ").indexOf(v) > -1)
        v = v.toLowerCase();
    answer.push(v);
})
console.log(answer.join(""))