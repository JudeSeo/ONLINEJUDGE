// 2022-01-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let str = input[0].toUpperCase();
let word = {};
for (let i = 0; i < str.length; i++) {
    word[str.charAt(i)] = (word[str.charAt(i)] || 0) + 1
}
let keys = Object.keys(word);
let max = Math.max(...Object.values(word));
let cnt = 0;
let answer = ""
for (let i = 0; i < keys.length; i++) {
    let value = word[keys[i]];
    if (value >= max) {
        max = value;
        answer = keys[i];
        cnt++
    }
    if (cnt > 1) {
        answer = "?";
        break;
    }
}

console.log(answer);