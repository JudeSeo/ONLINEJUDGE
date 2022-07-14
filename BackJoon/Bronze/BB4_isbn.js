// 2022-07-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 91 + input[0] * 1 + input[1] * 3 + input[2] * 1;
console.log("The 1-3-sum is "+answer);
