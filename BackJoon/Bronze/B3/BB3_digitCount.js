// 2022-10-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
for (let i = input[0]; i <= input[1]; i++) {
    let temp = i.toString().split("")
    temp.forEach(v => {
        if (v == input[2])
            answer++
    })
}
console.log(answer)