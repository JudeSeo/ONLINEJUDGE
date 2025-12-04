// 2023-11-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
const num = {
    "-": 0,
    "\\": 1,
    "(": 2,
    "@": 3,
    "?": 4,
    ">": 5,
    "&": 6,
    "%": 7,
    "/": -1
}
let answer = [];
input.forEach(v => {
    if (v == "#") return;
    let temp = v.split("").map(val => num[val]);
    let sum = 0;
    temp.forEach((val, index) => {
        sum += (8 ** (temp.length - index-1) * val);
    })
    answer.push(sum);
})
console.log(answer.join("\n"));