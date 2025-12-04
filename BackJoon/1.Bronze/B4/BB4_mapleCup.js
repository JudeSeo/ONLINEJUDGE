// 2023-10-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "Bad";
if (input[0] >= 1000) {
    answer = "Good";
    if (input[1] >= 8000 || input[2] >= 260) {
        answer = "Very Good";
    }
}
console.log(answer);
