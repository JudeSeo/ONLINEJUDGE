// 2022-03-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    v = v.split(" ");
    if (v[0] == '0' && v[1] == '0' && v[2] == '0')
        return;

    let first = parseInt(v[0]);
    let second = parseInt(v[1]);
    let third = parseInt(v[2]);
    let temp = (parseInt(third / second) * first) + ((third % second) > first ? first : third % second);
    answer.push("Case " + (i + 1) + ": " + temp);
});

console.log(answer.join("\n"));