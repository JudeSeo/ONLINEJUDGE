// 2023-04-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let [e, n] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let temp = input.splice(0, n).map(v => Number(v));
    let result = 0;
    temp.map(v => v > e ? result++ : "");
    answer.push(result)
}
console.log(answer.join("\n"))