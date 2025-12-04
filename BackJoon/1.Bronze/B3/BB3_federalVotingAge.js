// 2023-09-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (2007 - temp[0] > 18) answer.push("Yes")
    else if (2007 - temp[0] == 18) {
        if (temp[1] < 2) answer.push("Yes");
        else if (temp[1] == 2) {
            if (temp[2] <= 27) answer.push("Yes");
            else answer.push("No")
        } else answer.push("No")
    } else answer.push("No")

})
console.log(answer.join("\n"))