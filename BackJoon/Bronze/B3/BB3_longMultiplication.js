// 2023-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>BigInt(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => BigInt(v));
let answer = input.slice(0);
let temp = input[1].toString().split("").map(v => BigInt(v));
temp.reverse().forEach(v => {
    answer.push(input[0] * v)
})
answer.push(input[0] * input[1])
console.log(answer.join("\n"))

// 왜 틀렸나 했는데 범위 초과... BigInt로 수정하니까 맞았다.