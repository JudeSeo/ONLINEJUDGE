// 2023-07-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 1;
let news = {1: "N", 2: "E", 3: "S", 4: "W"}
input.forEach(v => {
    if (v == 1) {
        answer++
        if (answer > 4) answer -= 4;
        if (answer < 1) answer += 4;
    } else if (v == 2) {
        answer += 2
        if (answer > 4) answer -= 4;
        if (answer < 1) answer += 4;
    } else if (v == 3) {
        answer--
        if (answer > 4) answer -= 4;
        if (answer < 1) answer += 4;
    }
})
console.log(news[answer]);