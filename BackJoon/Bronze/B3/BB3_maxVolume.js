// 2023-10-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let pi = 3.14159
input.forEach(v => {
    let temp = v.split(" ");
    switch (temp[0]) {
        case "S":
            answer.push(4 / 3 * pi * (temp[1] ** 3));
            break;
        case "C":
            answer.push(1 / 3 * pi * (temp[1] ** 2) * temp[2]);
            break;
        case "L":
            answer.push(pi * (temp[1] ** 2) * temp[2]);
            break;
    }
});
console.log(Math.max(...answer).toFixed(3));