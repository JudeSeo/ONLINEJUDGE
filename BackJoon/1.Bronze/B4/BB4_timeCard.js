// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let hour = temp[3] - temp[0];
    let min = temp[4] - temp[1];
    let sec = temp[5] - temp[2];
    if (sec < 0) {
        sec += 60;
        min -= 1;
    }
    if (min < 0) {
        min += 60;
        hour -= 1;
    }
    if (hour < 0)
        hour += 24;
    let arr= [hour, min, sec];
    answer.push(arr.join(" "))
})
console.log(answer.join("\n"));
