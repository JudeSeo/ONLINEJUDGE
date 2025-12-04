// 2023-04-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0") return;
    else if (v >= 1896 && v % 4 == 0) {
        if ((v >= 1914 && v <= 1918) || (v > 1939 && v <= 1945)) answer.push(v + " Games cancelled");
        else if (v > 2020) answer.push(v + " No city yet chosen");
        else answer.push(v + " Summer Olympics");
    } else answer.push(v + " No summer games");
})
console.log(answer.join("\n"))