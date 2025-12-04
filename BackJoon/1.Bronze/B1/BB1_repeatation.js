// 2024-06-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("").map(v=>v.charCodeAt(0));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split("").map(v => v.charCodeAt(0));
let answer = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]) continue;
    else answer++;
}
console.log(answer);
