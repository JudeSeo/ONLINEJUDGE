// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let apple = input[0] * 7
let pear = input[1] * 13
let answer = apple > pear ? "Axel" : (apple < pear ? "Petra" : "lika");
console.log(answer);
