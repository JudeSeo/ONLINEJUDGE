// 2022-01-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\n');
input = input.splice(1, input.length - 1)
var nums = input[0];
input = nums.split(' ')
input.sort((a, b) => {
    return b - a
});
console.log(input[input.length - 1] + " " + input[0]);

//소스 개 더럽....