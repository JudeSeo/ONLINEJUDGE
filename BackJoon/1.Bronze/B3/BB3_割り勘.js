// 2022-08-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = [];
while (input.length > 1) {
    let money = 0;
    let [n, m] = input[0].split(" ")
    let num = Number(m / n);
    let temp = input[1].split(" ").map(v => Number(v));
    temp.forEach(v => {
        if (v >= num)
            money += num;
        else
            money += v
    })
    input = input.slice(2)
    answer.push(money)
}
console.log(answer.join("\n"));