// 2022-09-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let a = 100;
let b = 100;
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] > temp[1])
        b -= temp[0];
    else if (temp[0] < temp[1])
        a -= temp[1];
})
console.log(a);
console.log(b);