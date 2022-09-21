// 2022-09-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;;
let price = Number(input[0]);
input = input.slice(2);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer += (temp[0] * temp[1])
})
console.log((answer * price).toFixed(7));