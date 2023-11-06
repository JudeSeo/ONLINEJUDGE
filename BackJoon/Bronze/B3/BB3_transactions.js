// 2023-11-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 W 0") return;
    let temp = v.split(" ");
    if (temp[1] == "W") {
        if (Number(temp[0]) - Number(temp[2]) < -200) {
            answer.push("Not allowed")
        } else {
            answer.push(Number(temp[0]) - Number(temp[2]));
        }
    } else {
        answer.push(Number(temp[0]) + Number(temp[2]))
    }
})
console.log(answer.join("\n"));