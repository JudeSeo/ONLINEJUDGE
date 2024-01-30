// 2023-01-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val=>Number(val));
    answer.push(`You get ${Math.floor(temp[0]/temp[1])} piece(s) and your dad gets ${temp[0]%temp[1]} piece(s).`)
})
console.log(answer.join("\n"))
