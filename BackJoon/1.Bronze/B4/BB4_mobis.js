// 2023-07-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = "NO";
input.forEach(v => {
    if (input.indexOf("M") > -1 && input.indexOf("O") > -1 && input.indexOf("B") > -1 && input.indexOf("I") > -1 && input.indexOf("S") > -1) answer = "YES"
})
console.log(answer);
