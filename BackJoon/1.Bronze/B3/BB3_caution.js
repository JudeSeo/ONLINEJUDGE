// 2023-01-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let [hour1, min1, sec1] = input[0].split(":").map(v=>Number(v));
let [hour2, min2, sec2] = input[1].split(":").map(v=>Number(v));
if(hour1 == hour2 && min1==min2&&sec1==sec2) {
    console.log("24:00:00")
    return
}
if (sec2 - sec1 < 0) {
    sec2 += 60
    min2 -= 1
}
if (min2 - min1 < 0) {
    min2 += 60;
    hour2 -= 1;
}
if (hour2 - hour1 < 0)
    hour2 += 24;
let answer = (hour2 - hour1).toString().padStart(2, "0") + ":" + (min2 - min1).toString().padStart(2, "0") + ":" + (sec2 - sec1).toString().padStart(2, "0")
console.log(answer)
