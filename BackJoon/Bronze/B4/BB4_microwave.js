// 2022-07-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
if (input % 10 != 0)
    answer.push(-1);
else {
    answer.push(parseInt(input / 300));
    input %= 300;
    answer.push(parseInt(input / 60));
    input %= 60;
    answer.push(parseInt(input / 10));
}
console.log(answer.join(" "));
