// 2024-03-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let fruits = {STRAWBERRY: 0, BANANA: 0, LIME: 0, PLUM: 0}
let answer = "NO"
input.forEach(v => {
    let temp = v.split(" ");
    fruits[temp[0]] += Number(temp[1]);
})
let bell = Object.keys(fruits).filter(key => fruits[key] === 5).length;
if (bell > 0) answer = "YES";
console.log(answer);