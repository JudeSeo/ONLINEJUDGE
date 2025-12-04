// 2022-09-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    v = v.split("")
    let num = (Number(v[0] + v[1]) ** 2) + (Number(v[2] + v[3]) ** 2)
    if (num % 7 == 1)
        answer.push("YES");
    else
        answer.push("NO")
})
console.log(answer.join("\n"));