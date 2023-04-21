// 2023-04-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let [n, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v))
    let temp = input.splice(0, m);
    let arr = Array(n).fill(0);
    temp.map(v => {
        v.split(" ").map(val => Number(val)).forEach((val, i) => arr[i] += val);
    })
    answer.push(arr.indexOf(Math.max(...arr)) + 1);
}
console.log(answer.join("\n"));