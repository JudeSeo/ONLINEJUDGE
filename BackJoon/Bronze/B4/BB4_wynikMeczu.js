// 2023-07-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let a = 0, b = 0;
input.forEach(v => {
    if (v == "A") a++;
    else if (v == "B") b++;
})
console.log(`${a} : ${b}`)