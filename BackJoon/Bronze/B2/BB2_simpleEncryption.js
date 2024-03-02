// 2024-03-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let word = input[0].split("");
let str = input[1].replace(/[^A-Z]/g, "").split("");
let answer = "";
str.forEach((v, i) => {
    let num = word[i % word.length].charCodeAt(0) - 65;
    let encNum = v.charCodeAt(0) + num;
    answer += String.fromCharCode(encNum > 90 ? encNum - 26 : encNum);
})
console.log(answer);
