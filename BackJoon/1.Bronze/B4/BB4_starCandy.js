// 2022-06-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = 0;
let max = Math.max(...input);
input.forEach(v => {
    answer += (max - v)
})
console.log(answer);
