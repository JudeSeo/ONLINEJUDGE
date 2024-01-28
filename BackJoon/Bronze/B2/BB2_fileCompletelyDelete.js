// 2024-01-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "Deletion succeeded";
let num = input[0];
if (num % 2 == 0) {
    if (input[1] != input[2])
        answer = "Deletion failed";
} else {
    let result = "";
    input[1].split("").forEach(v => {
        result += v == "1" ? 0 : 1;
    })
    if (result != input[2])
        answer = "Deletion failed";
}
console.log(answer);