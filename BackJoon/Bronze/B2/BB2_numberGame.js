// 2024-02-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0") return;
    let temp = v.split("").map(val => Number(val));
    while (temp.length > 1) {
        let sum = 0;
        temp.forEach(val => {
            sum += val;
        })
        temp = sum.toString().split("").map(value => Number(value));
    }
    answer.push(temp[0]);
})
console.log(answer.join("\n"));