// 2022-12-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let arr = [], anaswer = '';
input.forEach((v, i) => {
    let sum = 0;
    let temp = v.split(" ").map(val => Number(val)).map(val => sum += val);
    arr.push(sum)
})
answer = Math.max(...arr)
console.log(`${arr.indexOf(answer) + 1} ${answer}`)