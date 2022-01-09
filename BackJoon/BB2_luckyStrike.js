// 2022-01-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\n');
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < input[0].length / 2; i++) {
    sum1 += parseInt(input[0][i]);
}
for (var i = input[0].length / 2; i < input[0].length; i++) {
    sum2 += parseInt(input[0][i]);
}
var answer = sum1 == sum2 ? "LUCKY" : "READY";
console.log(answer);

//오늘도 소스가 더럽다...