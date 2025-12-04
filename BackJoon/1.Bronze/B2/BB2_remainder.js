// 2022-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let set = new Set();
for (let i = 0; i < input.length; i++) {
    set.add(input[i]%42);
}
console.log(set.size)