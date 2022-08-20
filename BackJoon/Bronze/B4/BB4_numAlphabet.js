// 2022-07-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
    answer[input.charCodeAt(i) - 97]++;
}
console.log(answer.join(" "));
