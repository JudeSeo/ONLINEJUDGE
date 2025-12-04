// 2024-03-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let [n, m] = input.splice(0, 1)[0].split(" ");
let list = []
for (let i = 1; i <= n; i++) list.push(i);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let tmp = list.slice(temp[0] - 1, temp[1]).reverse();
    tmp.forEach((val, i) => {
        list[temp[0] - 1 + i] = val;
    })
})
console.log(list.join(" "));
