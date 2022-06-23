// 2022-06-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v == "#")
        return;
    let cnt = 0;
    let temp = v.split("")
    temp.forEach(value => {
        value = value.toLowerCase();
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u")
            cnt++;
    })
    answer.push(cnt);
})
console.log(answer.join("\n"));
