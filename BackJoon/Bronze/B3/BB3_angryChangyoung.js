// 2023-01-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [n, w, h] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let di = Math.sqrt(w ** 2 + h ** 2)
input.forEach(v => {
    if (v <= di) answer.push("DA");
    else answer.push("NE")
})
console.log(answer.join("\n"))