// 2024-09-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input[0] != "0") {
    let num = input.splice(0, 1)[0];
    let members = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let mem = [];
    for (let i = 0; i < num - 2; i++) {
        mem.push(members[i] + members[i + 1] + members[i + 2]);
    }
    answer.push(Math.max(...mem));
}
console.log(answer.join("\n"));