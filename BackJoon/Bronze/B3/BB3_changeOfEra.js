// 2022-10-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "#")
        return;
    let [g, y, m, d] = v.split(" ");
    if (y < 31)
        answer.push(v)
    else if (y > 31) {
        let temp = v.split(" ")
        temp[0] = "?";
        temp[1] -= 30;
        answer.push(temp.join(" "));
    } else {
        if (m <= 4)
            answer.push(v)
        else {
            let temp = v.split(" ")
            temp[0] = "?";
            temp[1] -= 30;
            answer.push(temp.join(" "));
        }
    }
})
console.log(answer.join("\n"))
