// 2022-06-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = input[0];
input = input.slice(1)[0].split(" ");
let answer = 0;
input.forEach(v => {
    v = Number(v)
    if (v == num)
        answer++;
})
console.log(answer);
