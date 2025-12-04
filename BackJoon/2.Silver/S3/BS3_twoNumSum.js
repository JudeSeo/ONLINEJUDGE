// 2024-06-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let arr = input[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let left = 0;
let right = arr.length - 1;
while (arr[left] >= input[1]) left++;
while (arr[right] >= input[1]) right--;
for (let i = left; i < right; i++) {
    while (arr[i] + arr[right] > input[1]) right--;
    if (i == right) break;
    if (arr[i] + arr[right] == input[1]) answer++;
}
console.log(answer);
