// 2022-03-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = 0;
input.forEach((v, i) => {
    let temp = Math.pow(v, 2);
    answer += temp;
})
console.log(answer % 10);