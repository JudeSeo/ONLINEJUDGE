// 2024-03-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n');
let answer = 0;
let [n, m, s] = input;
let ioi = "I";
for (let i = 0; i < n; i++) {
    ioi += "OI";
}
let i = 0;
let pattern = 0;
while (i < m - 2) {
    if (s.slice(i, i + 3) == "IOI") {
        pattern++;
        if (pattern == n) {
            answer++;
            pattern--;
        }
        i += 2
    } else {
        pattern = 0;
        i++;
    }
}
console.log(answer);