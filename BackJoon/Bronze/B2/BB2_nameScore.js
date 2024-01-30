// 2024-01-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = 0;
input.forEach(v => {
    answer += (parseInt(v.charCodeAt(0) - 64));
})
console.log(answer);