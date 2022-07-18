// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let day = input[0] - 11
let hour = input[1] - 11
let min = input[2] - 11;
if (min < 0) {
    min += 60;
    hour -= 1;
}
if (hour < 0) {
    hour += 24;
    day -= 1;
}
if (day < 0) {
    day = 0;
    hour = 0;
    min = -1
}
let answer = day * 1440 + hour * 60 + min
console.log(answer)
