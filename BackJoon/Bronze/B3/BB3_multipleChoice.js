// 2022-09-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = input[0]
input = input.slice(1);
let prob = input.slice(0, num);
let ans = input.slice(num);
let answer = 0;
prob.forEach((v, i) => {
    if (v == ans[i])
        answer++;
});
console.log(answer);