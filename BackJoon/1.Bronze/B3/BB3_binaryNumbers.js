// 2023-04-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let bin = [];
Number(input).toString(2).split("").reverse().forEach((v, i) => {
    if (v == 1) bin.push(i)
})
console.log(bin.join(" "))