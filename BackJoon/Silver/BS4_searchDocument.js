// 2022-06-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let string = input[0];
let word = input[1];
let answer = 0;
while (string.indexOf(word) !== -1) {
    string = string.replace(word, "0");
    answer++;
}
console.log(answer);
