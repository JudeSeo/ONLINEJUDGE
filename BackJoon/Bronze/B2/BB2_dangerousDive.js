// 2023-11-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [diver, surviver] = input.splice(0, 1)[0].split(" ");
let answer = [];
if (diver == surviver) answer.push("*");
else {
    input = input[0].split(" ").sort((a, b) => a - b).map(v => Number(v));
    for (let i = 1; i <= diver; i++) {
        if (input.indexOf(i) == -1)
            answer.push(i);
    }
}
console.log(answer.join(" "));