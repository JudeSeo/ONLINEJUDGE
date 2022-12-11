// 2022-12-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input.length > 0) {
    let num = Number(input.splice(0, 1)[0])
    let temp = input.splice(0, num).map(v =>BigInt(v));
    let sum = 0n;
    temp.forEach(v => {
        sum += v;
    })
    answer.push(sum == 0n ? 0 : (sum < 0n ? "-" : "+"));
}
console.log(answer.join("\n"));