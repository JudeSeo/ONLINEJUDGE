// 2022-08-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = [];
input.forEach(v => {
    if (v == -1.0)
        return;
    answer.push(`Objects weighing ${Number(v).toFixed(2)} on Earth will weigh ${(v * 0.167).toFixed(2)} on the moon.`)
})
console.log(answer.join("\n"));