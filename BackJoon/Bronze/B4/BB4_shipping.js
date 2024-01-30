// 2023-06-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let num = input.splice(0, 1)[0];
    let temp = input.splice(0, num);
    let total = 0;
    temp.forEach(v => {
        let tmp = v.split(" ");
        total += (Number(tmp[1]) * Number(tmp[2]));
    })
    answer.push(`$${total.toFixed(2)}`)
}
console.log(answer.join("\n"))