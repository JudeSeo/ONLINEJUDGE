// 2023-06-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "Normal weight";
const bmi = input[0] / (input[1] ** 2)
if (bmi > 25) answer = "Overweight";
else if (bmi < 18.5) answer = "Underweight"
console.log(answer);