// 2022-12-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(2).map(v=>BigInt(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(2).map(v => BigInt(v));
let answer = [];
while (input.length > 0) {
    let num = input.splice(0, 1)[0]
    let temp = input.splice(0, num.toString());
    input = input.slice(1);
    let sum = 0n;
    temp.forEach(v => {
        sum += v;
    })
    if (sum % num == 0)
        answer.push("YES");
    else
        answer.push("NO")
}
console.log(answer.join("\n"));