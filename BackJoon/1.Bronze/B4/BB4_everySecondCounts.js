//2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let before = input[0].split(" : ")
let after = input[1].split(" : ")
let hour = after[0] - before[0]
let min = after[1] - before[1]
let sec = after[2] - before[2]
if (sec < 0) {
    sec += 60;
    min -= 1
}
if (min < 0) {
    min += 60;
    hour -= 1;
}
if (hour < 0)
    hour += 24;
let answer = hour * 3600 + min * 60 + sec;
console.log(answer);
