// 2022-04-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 1;
let n = 1;
while (input > n) {
    n += (answer * 6);
    answer++;
}

console.log(answer); 