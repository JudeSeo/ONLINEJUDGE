// 2022-07-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = "Error";
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
if (a == b && b == c && a == 60)
    answer = "Equilateral";
else if (a + b + c == 180 && (a == b || b == c || a == c))
    answer = "Isosceles";
else if (a + b + c == 180)
    answer = "Scalene";
console.log(answer);
