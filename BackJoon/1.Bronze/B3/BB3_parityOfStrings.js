// 2023-10-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = new Map();
input.forEach(v => {
    if (answer.get(v) != undefined)
        answer.set(v, answer.get(v) + 1);
    else
        answer.set(v, 1);
})
let even = 0;
let odd = 0;
for (let [el, v] of answer.entries()) {
    if (v % 2 == 0) even++;
    else odd++;
}
if (even > 0 && odd > 0) console.log(2);
else if (odd > 0) console.log(1);
else console.log(0);