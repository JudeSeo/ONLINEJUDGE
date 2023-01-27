// 2023-01-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let num = Number(input.splice(0, 1)[0]), answer = [num];
input.forEach(v => {
    let [i, o] = v.split(" ").map(val => Number(val));
    num += i;
    num -= o;
    answer.push(num)
})
if (answer.filter(v => v < 0).length > 0) console.log(0);
else console.log(Math.max(...answer));
