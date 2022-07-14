// 2022-07-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').filter(v=>v=="W");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').filter(v=>v=="W");
let answer = -1
if(input.length == 1 || input.length == 2)
    answer = 3;
else if(input.length == 3 || input.length == 4)
    answer = 2;
else if(input.length == 5 || input.length == 6)
    answer = 1;
console.log(answer);
