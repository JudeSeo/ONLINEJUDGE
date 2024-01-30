// 2023-12-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().split('\n');
let answer = [];
input.forEach(v => {
    if (v == "") return;
    v = v.split("");
    let lower = 0, upper = 0, blank = 0, number = 0;
    v.map(val => {
        let asc = val.charCodeAt();
        if (asc >= 65 && asc <= 90) upper++;
        else if (asc >= 97 && asc <= 122) lower++;
        else if (asc >= 48 && asc <= 57) number++;
        else blank++;
    })
    answer.push(`${lower} ${upper} ${number} ${blank}`);
})
console.log(answer.join("\n"));