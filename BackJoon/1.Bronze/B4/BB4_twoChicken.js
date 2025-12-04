// 2022-06-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let money = input[0].split(" ").map(v => Number(v));
let answer = money[0] + money[1] - (input[1] * 2);
console.log(answer < 0 ? money[0] + money[1] : answer);
