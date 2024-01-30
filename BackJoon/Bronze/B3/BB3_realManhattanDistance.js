// 2022-08-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1)
input.forEach(v => {
    let [x1, y1, z1, x2, y2, z2] = v.split(" ").map(val => Number(val));
    let dist = z1 + Math.abs(x2 - x1) + Math.abs(y2 - y1) + z2;
    answer.push(dist)
})
console.log(answer.join("\n"));