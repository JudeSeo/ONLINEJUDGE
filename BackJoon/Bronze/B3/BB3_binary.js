// 2023-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
while (input.length > 0) {
    let temp = input.splice(0, 1)[0].toString(2).split("").reverse();
    let arr = [];
    temp.forEach((v, i) => {
        if (v == 1) arr.push(i)
    })
    answer.push(arr.join(" "))
}
console.log(answer.join("\n"));
