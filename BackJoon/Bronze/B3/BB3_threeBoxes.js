// 2023-09-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = 0;
let box = 1;
input.forEach(v => {
    if (v == "L") box = Math.max(1, box - 1);
    else if (v == "R") box = Math.min(3, box + 1);
    if (box == 3) answer++;
})
console.log(answer);