// 2022-06-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
input.forEach(v => {
    v = Number(v)
    if (v < 40)
        v = 40;
    answer += v;
})
console.log(answer / 5);
