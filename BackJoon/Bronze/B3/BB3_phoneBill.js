// 2022-12-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = "";
let y = 0, m = 0;
input.forEach(v => {
    y += parseInt(v / 30) * 10 + (v % 30 >= 0 ? 10 : 0);
    m += parseInt(v / 60) * 15 + (v % 60 >= 0 ? 15 : 0);
})
if (y > m) {
    answer += "M "
    answer += m
} else if (y < m) {
    answer += "Y ";
    answer += y
} else {
    answer += "Y M "
    answer += y
}
console.log(answer);