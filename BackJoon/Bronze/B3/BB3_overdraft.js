// 2023-03-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>BigInt(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => BigInt(v));
let answer = 0n;
let acc = 0n;
input.forEach((v, i) => {
    acc += v;
    answer = answer < acc ? answer : acc;
})
console.log((answer * -1n).toString());