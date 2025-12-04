// 2024-06-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
let num = 1;
while (input > 0) {
    if (input >= num) {
        input -= num;
        answer++;
        num++;
    } else
        num = 1;
}
console.log(answer);