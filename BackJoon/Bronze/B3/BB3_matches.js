// 2022-09-11
const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
answer = [];
let [num, w, h] = input[0].split(" ");
input = input.slice(1).map(v => Number(v));
let l = Math.sqrt(w ** 2 + h ** 2)
input.forEach(v => {
    if (v <= l)
        answer.push("YES");
    else
        answer.push("NO")
})
console.log(answer.join("\n"));