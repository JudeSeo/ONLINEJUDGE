// 2022-01-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var length = input[0];
var num = input[1];
var sum = 0;
for (var i = 0; i < length; i++) {
    sum += parseInt(num.charAt(i));
}
console.log(sum);