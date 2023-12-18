// 2023-12-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").sort((a, b) => a - b);
    if (temp[0] == temp[3]) {
        answer.push((50000 + (temp[0] * 5000)));
    } else if (temp[0] == temp[2] || temp[1] == temp[3]) {
        answer.push((10000 + (temp[1] * 1000)));
    } else if (temp[0] == temp[1] && temp[2] == temp[3]) {
        answer.push((2000 + (temp[0] * 500) + (temp[2] * 500)));
    } else if (temp[0] == temp[1] || temp[1] == temp[2]) {
        answer.push((1000 + (temp[1] * 100)));
    } else if (temp[2] == temp[3]) {
        answer.push((1000 + (temp[2] * 100)));
    } else {
        answer.push((temp[3] * 100));
    }
})
console.log(Math.max(...answer));