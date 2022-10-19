// 2022-10-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = 0;
input.forEach(v => {
    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u")
        answer++;
})
console.log(answer);