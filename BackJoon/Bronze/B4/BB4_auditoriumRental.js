// 2024-09-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "";
let max = 0;
input.forEach(v => {
    let temp = v.split(" ");
    if (max <= Number(temp[1])) {
        max = Number(temp[1]);
        answer = temp[0];
    }
})
console.log(answer);