// 2024-03-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v == "Was it a cat I saw?") return;
    let str = "";
    let temp = v.split("");
    for (let j = 0; j < temp.length; j++) {
        str += temp[j];
        j += (i+1);
    }
    answer.push(str);
})
console.log(answer.join("\n"));