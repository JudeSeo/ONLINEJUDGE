//2022-02-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v.indexOf("FBI") >= 0)
        answer.push(++i);
});
console.log(answer.length == 0 ? "HE GOT AWAY!" : answer.join(" "));