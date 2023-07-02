// 2023-07-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
input.forEach(v => {
    let temp = v.replace("D-", "");
    if (temp <= 90) answer++;
})
console.log(answer);