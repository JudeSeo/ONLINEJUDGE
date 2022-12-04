// 2022-12-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let even = 0n, odd = 0n;
    let temp = v.split(" ").map(val => BigInt(val))
    temp = temp.slice(1)
    temp.forEach(val => {
        if (val % 2n == 0)
            even += val
        else
            odd += val;
    })
    if (even < odd)
        answer.push("ODD")
    else if (even > odd)
        answer.push("EVEN")
    else
        answer.push("TIE")
})
console.log(answer.join("\n"))