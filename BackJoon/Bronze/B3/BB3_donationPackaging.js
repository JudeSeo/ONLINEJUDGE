// 2022-08-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
let [a, b, c] = [0, 0, 0];
input.forEach(v => {
let package = 0;
    let temp = v.split(" ").map(val => Number(val))
    a += temp[0];
    b += temp[1];
    c += temp[2];
    if (a >= 30 && b >= 30 && c >= 30) {
        package = Math.min(a, b, c)
        a -= package;
        b -= package;
        c -= package
    }
    if (package > 0)
        answer.push(package)
    else
        answer.push("NO")
})
console.log(answer.join("\n"));