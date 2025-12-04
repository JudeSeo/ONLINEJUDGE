// 2022-10-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer += (temp[1] % temp[0])
})
console.log(answer)