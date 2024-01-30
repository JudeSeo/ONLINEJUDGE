// 2023-06-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let word = temp[0].split("")
    let g = word.splice(temp[1], temp[2] - temp[1]);
    answer.push(word.join(""))
})
console.log(answer.join("\n"))