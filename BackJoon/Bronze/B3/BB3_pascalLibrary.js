// 2023-03-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input.length > 1) {
    let num = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let temp = input.splice(0, num[1]);
    let sum = new Array(num[0]).fill(0);
    for (let i = 0; i < num[1]; i++) {
        let tmp = temp[i].split(" ").map(v => Number(v));
        tmp.forEach((v, j) => {
            if (v == 1)
                sum[j]++;
        })
    }
    if (sum.includes(num[1]))
        answer.push("yes")
    else
        answer.push("no")
}
console.log(answer.join("\n"))
