// 2023-01-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let price = Number(input.splice(0, 1)[0]);
    let num = input.splice(0, 1);
    let option = input.splice(0, num);
    option.forEach(v => {
        let temp = v.split(" ").map(val => Number(val));
        price += temp[0] * temp[1];
    })
    answer.push(price);
}
console.log(answer.join("\n"))
