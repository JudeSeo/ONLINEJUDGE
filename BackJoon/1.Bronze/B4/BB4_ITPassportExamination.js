// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v));
    let arr = [];
    arr.push(temp[0]);
    arr.push(temp[1] + temp[2] + temp[3]);
    if (temp[1] + temp[2] + temp[3] >= 55 && temp[1] >= 10.5 && temp[2] >= 7.5 && temp[3] >= 12)
        arr.push("PASS")
    else
        arr.push("FAIL");
    answer.push(arr.join(" "))
})
console.log(answer.join("\n"));
