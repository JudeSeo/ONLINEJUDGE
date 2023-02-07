// 2023-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
let time = input.splice(0, 1)[0].split(" ")[1];
input[0].split(" ").forEach(v => {
    time -= v;
    if (time >= 0) answer++;
})
console.log(answer);
