// 2023-08-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "00:00 00:00") return;
    let time = v.split(" ");
    let start = time[0].split(":").map(v => Number(v));
    let end = time[1].split(":").map(v => Number(v));
    let min = start[1] + end[1];
    let hour = start[0] + end[0]
    let day = 0;
    while (min >= 60) {
        min -= 60;
        hour += 1;
    }
    while (hour >= 24) {
        hour -= 24
        day++;
    }
    if (day > 0) answer.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} +${day}`)
    else answer.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`)
})
console.log(answer.join("\n"))
