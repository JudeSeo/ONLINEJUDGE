// 2024-07-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let pic = [0, ...input.splice(0, num)];
let pro = input.slice(1);
let answer = [];
pro.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer.push(...pic.slice(temp[0], temp[1] + 1));
})
console.log(answer.join("\n"));