// 2022-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let height = input[0] - input[1];
if (height <= 0)
    answer = 250;
else {
    if (height % input[2] == 0)
        answer = height / input[2] * 100 + 250;
    else
        answer = parseInt(height / input[2] + 1) * 100 + 250;
}
console.log(answer);
