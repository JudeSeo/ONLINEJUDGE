// 2022-09-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input.length > 1) {
    let num = Number(input.splice(0, 1)[0]);
    let temp = input.splice(0, Number(num));
    let hour = 0;
    let total = 0;
    temp.forEach(v => {
        let tem = v.split(" ").map(val => Number(val));
        hour = tem[1] - hour;
        total += tem[0] * hour;
        hour = tem[1];
    })
    answer.push(`${total} miles`)
}
console.log(answer.join("\n"));