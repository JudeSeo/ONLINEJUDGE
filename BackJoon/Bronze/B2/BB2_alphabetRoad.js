// 2022-04-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let alphabet = {};
for (let i = 0; i < 26; i++) {
    alphabet[String.fromCharCode(65 + i)] = i + 1;
}

input.forEach((v, i) => {
    let answer = [];
    let temp = v.split(" ");
    for (let i = 0; i < temp[0].length; i++) {
        let sub = alphabet[temp[1][i]] - alphabet[temp[0][i]];
        answer.push(sub >= 0 ? sub : sub + 26);
    }
    console.log("Distances: " + answer.join(" "));
});