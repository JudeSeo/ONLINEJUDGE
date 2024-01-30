// 2023-09-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
input.forEach(v => {
    answer += v;
})
console.log(answer.toFixed(2))

// 왜 틀렸는지 모르겠다....