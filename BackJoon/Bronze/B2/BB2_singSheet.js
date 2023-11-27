// 2023-11-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [n, q] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let sheet = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < input[i]; j++) {
        sheet.push(i + 1)
    }
}
input = input.splice(n);
input.forEach(v => {
    answer.push(sheet[v]);
})
console.log(answer.join("\n"));