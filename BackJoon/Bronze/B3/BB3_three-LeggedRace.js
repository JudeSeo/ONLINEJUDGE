// 2023-09-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (answer.includes(v)) {
        answer.splice(answer.indexOf(v), 1);
    } else {
        answer.push(v);
    }
})
console.log(answer[0]);


// 맞는거 같은데 왜 틀렸을까.....