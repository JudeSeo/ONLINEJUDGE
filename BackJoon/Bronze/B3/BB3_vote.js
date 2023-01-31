// 2023-01-31
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)[0].split("");
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1)[0].split("");
let a = 0, b = 0;
input.forEach((v, i) => {
    v == "A" ? a++ : b++;
})
console.log(a > b ? "A" : a < b ? "B" : "Tie");
