// 2023-01-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let rules = input.slice(1, Number(input[0]) + 1)
input = input.slice(Number(input[0]) + 2).map(v => Number(v))
input.forEach(v => {
    answer.push(`Rule ${v}: ${rules[v - 1] == undefined ? 'No such rule' : rules[v - 1]}`)
})
console.log(answer.join("\n"))
