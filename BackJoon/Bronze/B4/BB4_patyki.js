// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
input.sort((a, b) => a - b);
let answer = 0;
if (input[0] == input[1] && input[1] == input[2])
    answer = 2
else if (input[2] ** 2 == (input[1] ** 2 + input[0] ** 2))
    answer = 1;
console.log(answer);
