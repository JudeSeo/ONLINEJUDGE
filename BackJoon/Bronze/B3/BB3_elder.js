// 2022-12-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let master = input[0];
let answer = new Set();
answer.add(master)
input = input.slice(2)
input.forEach(v => {
    let temp = v.split(" ")
    if (temp[1] == master) {
        master = temp[0];
        answer.add(temp[0])
    }
})
console.log(master);
console.log(answer.size);