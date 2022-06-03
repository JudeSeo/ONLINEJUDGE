// 2022-06-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
input = Number(input);
let answer = 0n;
let arr = [1n, 1n];
for (let i = 2; i <= input; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
}
answer = 2n * (arr[input - 1] + arr[input])
console.log(answer.toString());
