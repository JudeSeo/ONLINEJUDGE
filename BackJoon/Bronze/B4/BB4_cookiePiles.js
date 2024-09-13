// 2024-09-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let cookies = [temp[1]];
    for (let i = 1; i < temp[0]; i++) {
        cookies.push(cookies[i - 1] + temp[2]);
    }
    let sum = 0;
    cookies.map(val => sum += val);
    answer.push(sum);
})
console.log(answer.join("\n"));