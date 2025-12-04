// 2022-02-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.sort((a, b) => {
    return a.split(" ")[0] - b.split(" ")[0]
})
console.log(input.join("\n"));