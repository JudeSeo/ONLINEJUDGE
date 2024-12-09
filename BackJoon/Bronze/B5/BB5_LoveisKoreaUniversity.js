// 2024-12-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let str = ""
for (let i = 0; i < input; i++) {
    str += "LoveisKoreaUniversity "
}
str = str.trim()
console.log(str);
