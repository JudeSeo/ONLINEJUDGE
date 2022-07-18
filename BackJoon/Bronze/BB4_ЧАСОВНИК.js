// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let hour = input[2] - input[0];
let min = input[3] - input[1];
if (min < 0) {
    min += 60
    hour -= 1;
}
if(hour < 0){
    hour+= 24;
}
let time = hour * 60 + min
let answer = [time, parseInt(time / 30)];
console.log(answer.join(" "));
