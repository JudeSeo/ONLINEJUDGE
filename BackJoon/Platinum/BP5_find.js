// 2022-01-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var flag = true;
var answer = [];
var str = input[0];
var word = input[1];
var length = input[1].length;
var cnt = 0;
var index = 0;
while (true) {
    index += str.indexOf(word);
    if (str.indexOf(word) > 0) {
        answer.push(index + 1 +(cnt * length));
        str = str.substring(str.indexOf(word) + length);
        cnt++;
    } else
        break;
}
console.log(cnt);
console.log(answer.join(" "))