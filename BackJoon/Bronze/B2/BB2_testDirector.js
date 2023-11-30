// 2023-11-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let [main, sub] = input[1].split(" ");
input = input[0].split(" ").map(v => Number(v));
input.forEach(v => {
    answer++;
    if (v >= main)
        answer += Math.ceil((v - main) / sub);
})
console.log(answer);