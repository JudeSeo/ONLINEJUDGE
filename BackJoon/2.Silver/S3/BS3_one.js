// 2025-12-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    let temp = 1;
    let cnt = 1;
    if (v != 1) {
        let div10 = (10 % v);
        while (cnt != 0) {
            cnt = (cnt * div10 + 1) % v;
            temp++;
        }
    }
    answer.push(temp);
})
console.log(answer.join("\n"));
