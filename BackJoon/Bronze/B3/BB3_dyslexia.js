// 2023-09-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let word1 = input[0].split("")
let word2 = input[1].split("")
let answer = 0;
for (let i = 0; i < num; i++) {
    if (word1[i] != word2[i]) answer++;
}
console.log(answer);