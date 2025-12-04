// 2023-06-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("");
    let tmp = [temp[0]];
    for (let i = 1; i <= temp.length - 1; i++) {
        if (tmp[tmp.length - 1] != temp[i]) tmp.push(temp[i]);
    }
    answer.push(tmp.join(""))
})
console.log(answer.join("\n"))