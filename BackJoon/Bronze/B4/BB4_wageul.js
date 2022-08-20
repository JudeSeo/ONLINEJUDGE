// 2022-07-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "OK";
let univ = ["Soongsil", "Korea", "Hanyang"]
let sum = input.reduce((a, b) => a + b);
if (sum < 100) {
    answer = univ[input.indexOf(Math.min(...input))]
}
console.log(answer);