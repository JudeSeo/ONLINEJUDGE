// 2024-01-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "EOI") return;
    if (v.toLowerCase().indexOf("nemo") > -1) answer.push("Found");
    else answer.push("Missing");
})
console.log(answer.join("\n"));