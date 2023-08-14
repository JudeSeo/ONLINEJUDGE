// 2023-08-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val)).slice(1);
    answer.push("Denominations: " + temp.join(" "))
    let flag = true;
    for (let i = 0; i < temp.length - 1; i++) {
        if (temp[i] * 2 > temp[i + 1]) flag = false;
    }
    if(flag) answer.push("Good coin denominations!");
    else answer.push("Bad coin denominations! ");
    answer.push("");
})
answer = answer.slice(0, answer.length - 1);
console.log(answer.join("\n"))