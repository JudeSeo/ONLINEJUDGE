// 2022-01-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let temp = input.slice();
temp.sort((a, b) => {
    return b - a;
});
let answer = input.indexOf(temp[0])
console.log(temp[0])
console.log(answer + 1)
