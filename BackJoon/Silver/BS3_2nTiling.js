var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
input = Number(input);
let answer = [1n, 1n];
for (let i = 0; i <= (input + 1); i++) {
    answer.push((answer[i] + answer[i + 1]) % 10007n);
}
console.log(answer[input].toString());
