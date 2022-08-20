// 2021-12-06
const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();
var star = "";
var answer = "";
for (var i = 0; i < input; i++) {
    star += "*";
    answer += (star + "\n");
}