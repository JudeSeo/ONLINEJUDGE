// 2024-02-16
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let [a, b] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let temp = input.splice(0, 1)[0].split("")
    let string = "";
    temp.forEach(v => {
        let x = v.charCodeAt() - 65;
        let str = String.fromCharCode(((a * x + b) % 26) + 65);
        string += str;
    })
    answer.push(string);
}
console.log(answer.join("\n"));