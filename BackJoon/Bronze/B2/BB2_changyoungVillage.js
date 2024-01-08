// 2024-01-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("";
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = 1;
input.forEach(v => {
    if (v == "A") {
        if (answer == 1) answer = 2;
        else if (answer == 2) answer = 1;
    } else if (v == "B") {
        if (answer == 2) answer = 3;
        else if (answer == 3) answer = 2;
    } else if (v == "C") {
        if (answer == 1) answer = 3;
        else if (answer == 3) answer = 1;
    }
})
console.log(answer);