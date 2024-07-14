// 2024-07-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "";
input.forEach(v => {
    if (v.indexOf("w") > -1) {
        answer = "chunbae";
        return;
    } else if (v.indexOf("b") > -1) {
        answer = "nabi"
        return;
    } else if (v.indexOf("g") > -1) {
        answer = "yeongcheol"
        return;
    }
})
console.log(answer);