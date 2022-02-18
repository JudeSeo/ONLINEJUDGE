// 2022-02-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = "";
input = input[0];
letanswer = "";
for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90)
        answer += input[i].toLowerCase();
    else
        answer += input[i].toUpperCase();
}
console.log(answer);