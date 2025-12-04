// 2024-06-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split("");
let answer = "NON ALPSOO";
let flag = true;
let arr = [];
for (let i = 0; i < input.length - 1; i++) {
    arr.push(input[i + 1] - input[i]);
}
if (arr[0] <= 0) flag = false
if (arr[arr.length - 1] >= 0) flag = false
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 0) flag = false;
    if (arr[i] > 0 && arr[i + 1] > 0 || arr[i] < 0 && arr[i + 1] < 0) {
        if (arr[i] != arr[i + 1]) flag = false;
    }
}
if (flag) answer = "ALPSOO";
console.log(answer);
