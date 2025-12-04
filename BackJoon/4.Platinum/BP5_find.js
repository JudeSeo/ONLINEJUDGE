// 2022-01-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let flag = true;
let answer = [];
let str = input[0];
let word = input[1];
let length = input[1].length;
let cnt = 0;
let index = 0;
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