// 2022-10-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let people = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    people += temp[1];
    people -= temp[0];
    answer.push(people)
})
console.log(Math.max(...answer))