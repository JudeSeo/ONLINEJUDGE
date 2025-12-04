// 2023-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [], a = 0, b = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    temp[0] > temp[1] ? a++ : temp[0] < temp[1] ? b++ : "";
})
console.log(a, b);
