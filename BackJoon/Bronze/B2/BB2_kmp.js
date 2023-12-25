// 2023-12-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("-;
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("-");
let answer = "";
input.forEach(v => {
    answer += v[0];
})
console.log(answer);