// 2023-09-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = 2;
let num = 0;
while (true) {
    if (input[0] < input[1]) break;
    num = input[0] - input[1]
    input[0] = input[1];
    input[1] = num;
    answer++;
}
console.log(answer);