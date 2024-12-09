// 2024-10-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
let arr = [];
if (input[0] == input[1] || input[1] == 1) answer = 1;
else {
    for (let i = 0; i < input[0]; i++) {
        arr[i] = new Array();
        arr[i][0] = 1
        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || i == j) continue;
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
        arr[i][i] = 1;
    }
    answer = arr[input[0] - 1][input[1] - 1]
}
console.log(answer);
