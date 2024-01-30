// 2022-06-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "TLE!";
if (input[1] == 1 || input[1] == 2)
    answer = "NEWBIE!";
else if (input[1] <= input[0])
    answer = "OLDBIE!"
console.log(answer);
