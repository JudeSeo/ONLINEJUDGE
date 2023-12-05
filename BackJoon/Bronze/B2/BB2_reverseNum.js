var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("").reverse().join("");
    let num = (Number(v) + Number(temp)).toString().split("");
    let flag = true;
    for (let i = 0; i < Math.ceil(num.length / 2); i++) {
        if (num[i] != num[num.length - 1 - i]) {
            flag = false;
            break;
        }
    }
    if (flag) answer.push("YES");
    else answer.push("NO");
})
console.log(answer.join("\n"));
