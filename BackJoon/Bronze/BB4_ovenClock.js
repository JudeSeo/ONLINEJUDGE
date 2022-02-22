// 2022-02-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let hour = parseInt(input[0].split(" ")[0]);
let min = parseInt(input[0].split(" ")[1]);
let now = min+parseInt(input[1]);
while(now >= 60){
    hour = parseInt(hour)+1;
    now = now - 60;
}
while(hour >= 24)
    hour = hour-24;

console.log(hour+" "+now);