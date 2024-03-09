// 2024-03-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let [num, m] = input.splice(0, 1)[0].split(" ");
    if (m == "C") {
        let temp = input.splice(0, 1)[0].split(" ");
        let num = [];
        temp.forEach(v => {
            num.push(v.charCodeAt(0) - 64);
        })
        answer.push(num.join(" "));
    } else {
        let temp = input.splice(0, 1)[0].split(" ").map(v => Number(v));
        let str = [];
        temp.forEach(v => {
            str.push(String.fromCharCode(v + 64));
        })
        answer.push(str.join(" "));

    }
}
console.log(answer.join("\n"));