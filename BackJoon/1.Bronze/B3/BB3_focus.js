// 2023-08-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let f = 1 / ((1 / temp[0]) + (1 / temp[1]))
    answer.push("f = "+(Math.round(f*10)/10).toFixed(1));
})
console.log(answer.join("\n"));
