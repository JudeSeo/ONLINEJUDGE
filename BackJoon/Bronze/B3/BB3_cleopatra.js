// 2023-04-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
let tone = input[0].split(" ")[1];
input = input[1].split(" ").map(v => Number(v));
while (true) {
    input.forEach((v, i) => {
        if (v < tone++ && answer == 0) {
            answer = i + 1;
        }
    })
    if (answer != 0) break;
}
console.log(answer);
