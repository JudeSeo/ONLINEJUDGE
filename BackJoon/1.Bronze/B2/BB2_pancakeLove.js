// 2023-12-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(2);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(2);
let answer = [];
while (input.length > 1) {
    let [c, y, s1, s2, f] = input.splice(0, 1)[0].split(" ").map(val => Number(val));
    let [b, g1, g2, w] = input.splice(0, 1)[0].split(" ").map(val => Number(val));
    let min1 = Math.min(Math.floor(c * 16 / 8), Math.floor(y * 16 / 8), Math.floor(s1 * 16 / 4), Math.floor(s2 * 16), Math.floor(f * 16 / 9));
    let min2 = b + Math.floor(g1 / 30) + Math.floor(g2 / 25) + Math.floor(w / 10);
    answer.push(Math.min(min1, min2));
    input = input.slice(1);
}
console.log(answer.join("\n"));
