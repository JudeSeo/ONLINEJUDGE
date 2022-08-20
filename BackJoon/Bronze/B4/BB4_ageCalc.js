// 2022-07-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let birth = input[0].split(" ");
let today = input[1].split(" ");
if (today[0] - birth[0] > 0) {
    if (today[1] - birth[1] > 0)
        answer.push(today[0] - birth[0]);
    else if (today[1] - birth[1] == 0 && today[2] - birth[2] >= 0)
        answer.push(today[0] - birth[0]);
    else
        answer.push(today[0] - birth[0] - 1);
} else
    answer.push(0);
answer.push(today[0] - birth[0] + 1);
answer.push(today[0] - birth[0]);
console.log(answer.join("\n"));
