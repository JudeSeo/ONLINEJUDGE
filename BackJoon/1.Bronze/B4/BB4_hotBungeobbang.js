// 2022-07-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1)
input.forEach(v=>{
    let temp = v.split("");
    temp.reverse();
    answer.push(temp.join(""));
})
console.log(answer.join("\n"));
