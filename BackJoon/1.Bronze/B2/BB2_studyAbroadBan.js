// 2023-12-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let ban = ["C", "A", "M", "B", "R", "I", "D", "G", "E"];
ban.forEach(v => {
    input = input.replaceAll(v, "");
})
console.log(input);