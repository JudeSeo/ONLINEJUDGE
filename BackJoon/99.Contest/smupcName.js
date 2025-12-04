// 2024-05-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n')[0].split(" ");
let name = Array.from(new Set(input[1].split("")));
let length = Number(input[1].split("").length - name.length);
let answer = "smupc_" + (((1906 + Number(input[0])) + name.join("") + (length + 4)).split("").reverse().join(""))
console.log(answer);
