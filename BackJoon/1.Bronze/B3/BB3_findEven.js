// 2023-01-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let arr = 0;
    let temp = v.split(" ").map(val => Number(val)).filter(val => val % 2 == 0);
    temp.map(val => arr += val)
    answer.push(`${arr} ${Math.min(...temp)}`);
})
console.log(answer.join("\n"))