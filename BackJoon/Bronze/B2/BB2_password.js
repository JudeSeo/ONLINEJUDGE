// 2024-02-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let str = input[0].split("");
let answer = [];
let password = input[1].split("").map(v => v.charCodeAt(0) - 96);
for (let i = 0; i < str.length; i++) {
    let ch = '';
    if (str[i] == ' ') ch = str[i];
    else {
        let index = i % password.length;
        ch = str[i].charCodeAt(0) - password[index];
        if (ch < 97) ch += 26;
        ch = String.fromCharCode(ch);
    }
    answer.push(ch);
}
console.log(answer.join(""));
