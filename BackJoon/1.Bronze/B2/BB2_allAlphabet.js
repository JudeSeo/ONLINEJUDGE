// 2024-03-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
const alphabet = [];
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97 + i))
}
input.forEach(v => {
    let temp = v.toLowerCase().replace(/[^a-z]/g, "").split("").sort();
    let missing = [];
    for (let i = 0; i < alphabet.length; i++) {
        if (temp.indexOf(alphabet[i]) == -1) missing.push(alphabet[i]);
    }
    if (missing.length > 0)
        answer.push("missing " + missing.join(""));
    else
        answer.push("pangram");
})
console.log(answer.join("\n"));