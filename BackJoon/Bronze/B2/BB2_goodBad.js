// 2023-12-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let b = v.split("").filter(val => val.toLowerCase() == "b").length;
    let g = v.split("").filter(val => val.toLowerCase() == "g").length;
    if (b > g) answer.push(`${v} is A BADDY`);
    else if (b < g) answer.push(`${v} is GOOD`);
    else answer.push(`${v} is NEUTRAL`);
})
console.log(answer.join("\n"));