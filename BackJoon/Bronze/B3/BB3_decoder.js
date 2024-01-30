// 2023-04-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let code = {
    y: 'a',
    u: 'y',
    o: 'u',
    i: 'o',
    e: 'i',
    a: 'e',
    Y: 'A',
    U: 'Y',
    O: 'U',
    I: 'O',
    E: 'I',
    A: 'E',
}
input.forEach(v => {
    let temp = v.split("");
    let tmp = [];
    temp.forEach(val => {
        if (code[val] != undefined)
            val = code[val];
        tmp.push(val)
    })
    answer.push(tmp.join(""))
})
console.log(answer.join("\n"));