// 2023-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = "";
if (input[input.length - 1] == "G") {
    input = input.slice(0, input.length - 1);
    answer = input.join("")
} else {
    answer = input.join("") + "G"
}
console.log(answer);
