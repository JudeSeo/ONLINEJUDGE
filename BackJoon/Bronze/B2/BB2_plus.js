// 2022-03-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(",");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(",");
let answer = 0;
input.forEach((v, i) => {
    answer += parseInt(v);
});
console.log(answer);