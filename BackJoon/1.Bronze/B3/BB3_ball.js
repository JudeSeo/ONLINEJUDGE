// 2022-12-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 1;
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ")
    if (temp[0] == answer)
        answer = temp[1]
    else if (temp[1] == answer)
        answer = temp[0]
})
console.log(answer)