// 2023-06-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
const shortForm = {
    "CU": "see you",
    ":-)": "I’m happy",
    ":-(": "I’m unhappy",
    ";-)": "wink",
    ":-": "P	stick out my tongue",
    "(~.~)": "sleepy",
    "TA": "totally awesome",
    "CCC": "Canadian Computing Competition",
    "CUZ": "because",
    "TY": "thank-you",
    "YW": "you’re welcome",
    "TTYL": "talk to you later",
}
input.forEach(v => {
    answer.push(shortForm[v] ?? v);
})
console.log(answer.join("\n"))