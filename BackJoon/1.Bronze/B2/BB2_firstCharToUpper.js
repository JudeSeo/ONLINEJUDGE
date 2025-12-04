// 2022-03-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    console.log(v[0].toUpperCase() + v.slice(1));
})