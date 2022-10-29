// 2022-10-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
while (true) {
    if (input[0].split("").length == 1)
        break;
    let temp = input[0].split("").map(v => Number(v));
    let sum = 1;
    temp.forEach(v => {
        sum *= v;
    })
    answer++;
    input[0] = sum.toString();
}
console.log(answer)
