// 2022-09-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input=input.slice(1);
input.forEach((v, i)=>{
    let day = Number(v.split(" ")[1])
    answer.push(`${i+1} ${(2+day+1)*day/2}`)
})
console.log(answer.join("\n"));