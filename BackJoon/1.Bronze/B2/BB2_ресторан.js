// 2024-07-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = [];
let word = {
    B: 'v',
    E: 'ye',
    H: 'n',
    P: 'r',
    C: 's',
    Y: 'u',
    X: 'h',
    A: 'a',
    K: 'k',
    M: 'm',
    O: 'o',
    T: 't'
}
input.forEach(v => {
    answer.push(word[v]);
})
console.log(answer.join(""));