// 2022-10-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1)[0].split(" ");
input.forEach(v => {
    v = v.toLowerCase();
    if (v == "she" || v == "him" || v == "her" || v == "he")
        answer++;
})
console.log(answer)