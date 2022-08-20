// 2022-01-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
var input = fs.readFileSync('예제.txt').toString();
let length = input.length;
let num = parseInt(input);
let answer = 0;
let start = num - (9 * length)
start = start > 0 ? start : 0
for (let i = start; i < num; i++) {
    let sum = i;
    let number = i.toString();
    for (let j = 0; j < number.length; j++) {
        sum += parseInt(number[j])
    }
    if (sum == num) {
        answer = i;
        break;
    }
}
console.log(answer);