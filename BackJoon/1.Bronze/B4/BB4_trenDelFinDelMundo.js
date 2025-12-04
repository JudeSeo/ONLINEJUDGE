// 2024-09-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = "";
let min = 1000;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (min >= temp[1]) {
        min = temp[1];
        answer = v;
    }
})
console.log(answer);