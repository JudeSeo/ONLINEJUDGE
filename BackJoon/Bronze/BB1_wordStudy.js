// 2022-01-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let str = input[0].toUpperCase();
let word = {};
for (var i = 0; i < str.length; i++) {
    word[str.charAt(i)] = (word[str.charAt(i)] || 0) + 1
}
var keys = Object.keys(word);
let max = Math.max(...Object.values(word));
var cnt = 0;
var answer = ""
for (var i = 0; i < keys.length; i++) {
    var value = word[keys[i]];
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