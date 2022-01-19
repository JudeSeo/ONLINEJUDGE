// 2022-01-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\n');
var temp = input.slice();
temp.sort((a, b) => {
    return b - a;
});
var answer = input.indexOf(temp[0])
console.log(temp[0])
console.log(answer+1)