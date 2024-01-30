// 2023-12-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let str = input.splice(0, 1)[0].split("");
    let enc = input.splice(0, 1)[0].split("");
    let dec = ""
    str.forEach(v => {
        if (v == " ") dec += " ";
        else {
            let ascii = v.charCodeAt(0) - 65;
            dec += enc[ascii];
        }
    })
    answer.push(dec);
}
console.log(answer.join("\n"));