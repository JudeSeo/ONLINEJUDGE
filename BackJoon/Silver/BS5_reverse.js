// 2022-04-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("");
let answer = 0;
input.sort((a, b) => {
    if (a != b)
        answer++;
})
console.log(parseInt((answer + 1) / 2));