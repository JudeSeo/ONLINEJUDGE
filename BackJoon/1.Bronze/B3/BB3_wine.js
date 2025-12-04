// 2022-10-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
for (let i = 1; i <= input[0]; i++) {
    answer += (input[1] * i + input[2] * (i ** 2))
}
console.log(answer);