// 2025-03-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = 0;
input.forEach(v => {
    switch (v) {
        case "i":
            answer += 2;
            break;
        case "j":
            answer += 2;
            break;
        case "o":
            answer += 1;
            break;
    }
})
console.log(answer);
