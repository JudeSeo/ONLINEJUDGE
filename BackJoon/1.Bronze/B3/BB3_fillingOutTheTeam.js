// 2023-08-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ");
    let str = [];
    if (temp[0] <= 4.5 && temp[1] >= 150 && temp[2] >= 200)
        str.push("Wide Receiver");
    if (temp[0] <= 6.0 && temp[1] >= 300 && temp[2] >= 500)
        str.push("Lineman");
    if (temp[0] <= 5.0 && temp[1] >= 200 && temp[2] >= 300)
        str.push("Quarterback");
    if (str == '') str.push("No positions")
    answer.push(str.join(" "))
})
console.log(answer.join("\n"))