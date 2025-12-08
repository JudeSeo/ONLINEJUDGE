// 2025-12-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v == 0 || v == 1) answer.push(2);
    else {
        while (true) {
            let root = Math.floor(Math.sqrt(v));
            let flag = true;
            for (let i = 2; i <= root; i++) {
                if (v % i == 0) flag = false;
            }
            if (flag) {
                answer.push(v);
                break;
            }
            v++;
        }
    }
})
console.log(answer.join("\n"));
