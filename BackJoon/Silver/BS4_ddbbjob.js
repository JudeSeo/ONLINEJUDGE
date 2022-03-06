// 2022-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let d = input[0].split(" ")[0];
let b = input[0].split(" ")[1];
input = input.slice(1);
let dd = input.slice(0, d);
let bb = input.slice(d);
bb.forEach((v, i) => {
    answer.push(dd.find(n => (
        n == v
    )))
})
answer = answer.filter(n => (n != undefined))
console.log(answer.length + "\n" + answer.join("\n"));


//시간초과...ㅠ