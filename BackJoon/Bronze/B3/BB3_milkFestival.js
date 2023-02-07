// 2023-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = 0, start = 0;
input.forEach(v => {
    if (v == start) {
        answer++;
        if (start != 2)
            start++;
        else start = 0;
    }
})
console.log(answer);
