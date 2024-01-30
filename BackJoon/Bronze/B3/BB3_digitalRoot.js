// 2023-01-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0") return
    let sum = 0
    v.split("").map(val => sum += Number(val));
    while (parseInt(sum / 10) != 0) {
        let tempSum = 0
        sum.toString().split("").map(val => tempSum += Number(val));
        sum = tempSum;
    }
    answer.push(sum)
})
console.log(answer.join("\n"))