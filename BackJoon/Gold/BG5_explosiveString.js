// 2022-02-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let str = input[0];
let word = input[1];
while (str.indexOf(word) >= 0) {
    str = str.slice(0, str.indexOf(word)) + str.slice(str.indexOf(word) + word.length);
}
console.log(str == "" ? "FRULA" : str);

// 메모리초과로 틀림