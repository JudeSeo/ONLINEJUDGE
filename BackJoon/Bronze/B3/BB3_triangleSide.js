// 2023-01-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[0] + temp[1] <= temp[2]) answer.push("Invalid");
    else if (temp[0] == temp[2]) answer.push("Equilateral");
    else if (temp[0] == temp[1] || temp[1] == temp[2]) answer.push("Isosceles");
    else answer.push("Scalene")
})
console.log(answer.join("\n"))