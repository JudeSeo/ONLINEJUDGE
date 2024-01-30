// 2022-01-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let length = input[0];
input = input.slice(1);
let answer = []
input.forEach((v, i) => {
    if (v != 0)
        answer.push(v);
    else
        answer.pop();
});
let sum = 0;
for (let i = 0; i < answer.length; i++) {
    sum += parseInt(answer[i]);
}
console.log(sum);