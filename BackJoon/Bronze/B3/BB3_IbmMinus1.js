// 2023-01-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split("").map(val => {
        val = String.fromCharCode(val.charCodeAt() + 1)
        if (val.charCodeAt() == 91)
            val = "A";
        return val
    })
    answer.push(`String #${i + 1}\n${temp.join("")}`)
})
console.log(answer.join("\n\n"))
