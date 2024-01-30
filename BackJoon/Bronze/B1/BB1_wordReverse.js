// 2022-03-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1);
input.forEach((v, i) => {
    let temp = v.split(" ");
    let answer = [];
    temp.forEach((value, index) => {
        value = value.split("").reverse().join("");
        answer.push(value);
    });
    console.log(answer.join(" "));
});