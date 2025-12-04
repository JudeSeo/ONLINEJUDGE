// 2023-06-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
for (let i = input[0]; i <= input[1]; i += 60) {
    answer.push(`All positions change in year ${i}`)
}
console.log(answer.join("\n"))