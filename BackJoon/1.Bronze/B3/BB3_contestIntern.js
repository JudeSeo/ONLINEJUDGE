// 2022-12-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let [female, male, intern] = input;
let answer = Math.min(parseInt(female / 2), male);
let std = female + male - answer * 3;
while (intern > std) {
    answer--;
    std += 3
}
if(answer<0)
    answer = 0;
console.log(answer);