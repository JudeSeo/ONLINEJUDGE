// 2024-03-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let s = input.splice(0, 1)[0].split("");
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ");
    let tmp = s[temp[0]];
    s[temp[0]] = s[temp[1]];
    s[temp[1]] = tmp;
})
let answer = s.join("");
console.log(answer);