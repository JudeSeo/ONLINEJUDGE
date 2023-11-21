// 2023-11-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
for (; answer < input[0] * (input[1] + 5); answer += input[2]) {
    if (answer % (input[1] + 5) >= input[1]) break;
}
console.log(answer);


// 어렵다.... 제대로 못 풀었음....