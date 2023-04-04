// 2023-04-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = "";
let vote = 0;
if (input.filter(v => v == 0).length >= (input.length/2)) answer = "INVALID";
else {
    input.forEach(v => {
        vote += v;
    })
    answer = vote > 0 ? "APPROVED" : "REJECTED";
}
console.log(answer);