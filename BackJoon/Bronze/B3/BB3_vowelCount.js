// 2023-03-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let vowel = ['a', 'e', 'i', 'o', 'u']
input.forEach(v => {
    let vo = 0, cons = 0;
    v.split("").map(val => vowel.includes(val) ? vo++ : cons++)
    answer.push(vo > cons ? v + "\n1" : v + "\n0");
})
console.log(answer.join("\n"))
