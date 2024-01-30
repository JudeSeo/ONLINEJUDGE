// 2022-06-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[1].split("");
let answer = 0;
input.forEach(v => {
    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u")
        answer++
})
console.log(answer);
