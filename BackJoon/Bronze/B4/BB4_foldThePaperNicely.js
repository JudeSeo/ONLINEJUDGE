// 2023-11-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    answer.push(`Data set: ${v}`)
    answer.push("\n")
    let temp = v.split(" ").map(val => Number(val));
    while (temp[2] > 0) {
        if (temp[0] == 0 && temp[1] == 0) break;
        let max = Math.max(temp[0], temp[1]);
        let min = Math.min(temp[0], temp[1]);
        temp[0] = Math.floor(max / 2)
        temp[1] = min;
        temp[2] -= 1;
    }
    answer.push(`${Math.max(temp[0], temp[1])} ${Math.min(temp[0], temp[1])}`)
    answer.push("\n");
    answer.push("\n");
})
console.log(answer.join(""));