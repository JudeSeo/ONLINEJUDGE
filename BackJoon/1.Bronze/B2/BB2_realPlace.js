// 2023-12-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
input[0].split(" ").forEach(v => {
    answer += input[1] * Math.ceil(v / input[1]);
})
console.log(answer);
