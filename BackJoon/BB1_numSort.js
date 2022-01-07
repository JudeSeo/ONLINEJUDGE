// 2022-01-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\n');

var length = input.splice(0, 1);
var answer = []
input.sort((a, b) => {
    return a - b;
})
input.forEach(value => {
    value = value.replace("\r", "");
    answer = answer + value + "\n"
})
console.log(answer);