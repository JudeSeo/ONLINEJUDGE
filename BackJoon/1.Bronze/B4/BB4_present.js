// 2023-07-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [num, socks] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
input = input[0].split(" ").map(v => Number(v));
for (let i = 0; i < num - 1; i++) {
    answer.push(input[i] * socks + input[i + 1] * socks)
}
console.log(Math.min(...answer));