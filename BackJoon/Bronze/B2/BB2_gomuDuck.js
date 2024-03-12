// 2024-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = "힝구";
let num = 0;
input.forEach(v => {
    if (v == "고무오리 디버깅 끝") return;
    if (v == "문제") num++;
    if (v == "고무오리")
        if (num == 0) num += 2;
        else num--;
})
if (num == 0) answer = "고무오리야 사랑해";
console.log(answer);