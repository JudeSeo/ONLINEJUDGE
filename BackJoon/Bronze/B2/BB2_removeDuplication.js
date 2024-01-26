// 2024-01-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0") return;
    let temp = v.split(" ").slice(1);
    temp.push("$");
    let garbage;
    let i = 0;
    while (i < temp.length) {
        if (temp[i] == temp[i + 1]) {
            garbage = temp.splice(i, 1);
        } else i++;
    }
    answer.push(temp.join(" "))
})
console.log(answer.join("\n"));