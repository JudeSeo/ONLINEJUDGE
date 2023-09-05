// 2023-09-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let bag = 0;
input.forEach(v => {
    let temp = v.replaceAll("  ", " ").split(" ").map(val => Number(val));
    if (((temp[0] <= 56 && temp[1] <= 45 && temp[2] <= 25) || (temp[0] + temp[1] + temp[2]) <= 125) && temp[3] <= 7) {
        bag++
        answer.push(1);
    } else
        answer.push(0);
})
console.log(answer.join("\n"));
console.log(bag);