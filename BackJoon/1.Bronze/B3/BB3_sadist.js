// 2022-10-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1)[0].split(" ").map(v => Number(v));
input.forEach((v, i) => {
    if ((i + 1) != v)
        answer++
})
console.log(answer)