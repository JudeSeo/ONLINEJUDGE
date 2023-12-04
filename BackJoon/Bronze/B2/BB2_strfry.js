// 2023-12-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let word1 = temp[0].split("").sort().join("");
    let word2 = temp[1].split("").sort().join("");
    if (word1 == word2) answer.push("Possible");
    else answer.push("Impossible");
})
console.log(answer.join("\n"));