// 2022-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = parseInt(input[0]);
let fibo = [0, 1];
while (fibo.length <= num) {
    fibo[fibo.length] = fibo[fibo.length-1]+fibo[fibo.length-2];
}

console.log(fibo[num]);
