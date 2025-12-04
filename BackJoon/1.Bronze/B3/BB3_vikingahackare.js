// 2023-04-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let str = input.splice(input.length - 1)[0].split("");
let answer = [];
let word = input.map(v => v.split(" ")[0])
let string = input.map(v => v.split(" ")[1])
while (str.length > 0) {
    let temp = str.splice(0, 4).join("");
    if (string.indexOf(temp) > -1) answer.push(word[string.indexOf(temp)]);
    else answer.push("?")
}
console.log(answer.join(""))