// 2022-09-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let [l, w, a] = v.split(" ").map(val => Number(val));
    if (l == 0)
        l = a / w;
    if (w == 0)
        w = a / l;
    if (a == 0)
        a = l * w;
    answer.push(`${l} ${w} ${a}`);
})
console.log(answer.join("\n"));