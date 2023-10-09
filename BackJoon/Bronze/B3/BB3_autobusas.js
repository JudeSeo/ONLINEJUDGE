// 2023-10-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [stop, num] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let bus = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    bus += temp[0];
    bus -= temp[1];
    answer.push(bus - num);
})
console.log(Math.max(...answer));