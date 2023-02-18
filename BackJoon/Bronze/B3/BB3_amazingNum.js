// 2023-02-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
for (let i = 1; i <= input; i++) {
    let temp = i, sum = 0;
    while (temp >= 1) {
        sum += temp % 10
        temp = parseInt(temp / 10);
    }
    if (i % sum == 0) answer++;
}
console.log(answer);