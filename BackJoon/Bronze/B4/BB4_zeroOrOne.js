// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = "*";
if (input[0] == input[1] && input[1] == input[2])
    answer = "*";
else if (input[0] == input[1])
    answer = "C";
else if (input[2] == input[1])
    answer = "A";
else if (input[0] == input[2])
    answer = "B";
console.log(answer);
