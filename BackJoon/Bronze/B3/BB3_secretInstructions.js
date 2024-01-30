// 2023-10-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let dir = ""
input.forEach(v => {
    if (v == "99999") return;
    let temp = v.split("").map(val => Number(val));
    if (temp[0] == 0 && temp[1] == 0) {
    } else if ((temp[0] + temp[1]) % 2 == 0) {
        dir = "right";
    } else {
        dir = "left";
    }
    answer.push(`${dir} ${temp[2]}${temp[3]}${temp[4]}`);
})
console.log(answer.join("\n"));