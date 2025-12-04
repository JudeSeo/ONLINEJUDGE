// 2023-10-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
if (input % 3 == 1) {
    answer.push(2);
    answer.push(Math.floor(input / 3) - 1)
} else {
    answer.push((input % 3) / 2)
    answer.push(Math.floor(input / 3));
}
console.log(answer.join(" "));