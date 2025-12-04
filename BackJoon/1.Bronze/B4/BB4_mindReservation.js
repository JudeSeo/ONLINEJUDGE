// 2025-03-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = "YES";
let [t, x] = input[0].split(" ").map(v => Number(v));
input = input.slice(2);
while (input.length > 0) {
    let n = input.splice(0, 1)[0];
    let people = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    if (people.indexOf(x) == -1) {
        answer = "NO";
        break;
    }
}
console.log(answer);
