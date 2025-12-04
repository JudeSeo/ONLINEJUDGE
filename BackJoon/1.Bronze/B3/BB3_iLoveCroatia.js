// 2023-02-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let k = Number(input.splice(0, 1)[0]);
input = input.slice(1);
let score = 0;
input.forEach(v => {
    let [t, z] = v.split(" ");
    score += Number(t);
    if (score >= 210) return
    if (z == "T") k++;
    if (k > 8) k -= 8;
})
console.log(k);
