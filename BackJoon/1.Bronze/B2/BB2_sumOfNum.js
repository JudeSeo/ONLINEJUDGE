// 2022-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let length = input[0];
let num = input[1];
let sum = 0;
for (let i = 0; i < length; i++) {
    sum += parseInt(num.charAt(i));
}
console.log(sum);