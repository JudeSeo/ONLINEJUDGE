// 2022-01-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < input[0].length / 2; i++) {
    sum1 += parseInt(input[0][i]);
}
for (let i = input[0].length / 2; i < input[0].length; i++) {
    sum2 += parseInt(input[0][i]);
}
let answer = sum1 == sum2 ? "LUCKY" : "READY";
console.log(answer);

//오늘도 소스가 더럽다...