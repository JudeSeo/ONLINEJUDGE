// 2023-03-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let score = [100, 100, 200, 200, 300, 300, 400, 400, 500]
let answer = "";
let sum = 0;
input.forEach((v, i) => {
    if (v > score[i]) return answer = "hacker"
    sum += v
})
if (answer != "hacker") {
    answer = sum >= 100 ? "draw" : "none"
}
console.log(answer);