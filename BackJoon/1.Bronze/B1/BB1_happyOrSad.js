// 2024-06-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split("");
let happy = 0;
let sad = 0;
for (let i = 0; i < input.length - 2; i++) {
    if (input[i] == ":" && input[i + 1] == "-") {
        if (input[i + 2] == ")") happy++;
        else if (input[i + 2] == "(") sad++;
        i += 2;
    }
}
let answer;
if (sad == 0 && happy == 0) answer = "none";
else if (sad > happy) answer = "sad";
else if (sad < happy) answer = "happy";
else answer = "unsure";
console.log(answer);
