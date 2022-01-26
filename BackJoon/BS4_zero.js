// 2022-01-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var length = input[0];
input = input.slice(1);
var answer = []
input.forEach((v, i) => {
    if (v != 0)
        answer.push(v);
    else
        answer.pop();
});
var sum = 0;
for (var i = 0; i < answer.length; i++) {
    sum += parseInt(answer[i]);
}
console.log(sum);