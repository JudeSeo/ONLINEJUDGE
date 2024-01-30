// 2022-12-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let [a, b, c, d] = input[0].split(" ").map(v => Number(v));
let people = input[1].split(" ").map(v => Number(v));
let answer = [];
people.forEach(v => {
    let x = 0;
    if (v % (a + b) <= a && v % (a + b) > 0)
        x++;
    if (v % (c + d) <= c && v % (c + d) > 0)
        x++;
    answer.push(x);
})
console.log(answer.join("\n"));
