// 2023-03-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let single = ["Yakk", "Doh", "Seh", "Ghar", "Bang", "Sheesh"]
let double = ["Habb Yakk", "Dobara", "Dousa", "Dorgy", "Dabash", "Dosh"]
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[0] == temp[1])
        answer.push(`Case ${i + 1}: ${double[(temp[0] - 1)]}`)
    else if ((temp[0] == 5 && temp[1] == 6) || (temp[0] == 6 && temp[1] == 5))
        answer.push(`Case ${i + 1}: Sheesh Beesh`)
    else
        answer.push(`Case ${i + 1}: ${single[(temp[1] - 1)]} ${single[(temp[0] - 1)]}`)
})
console.log(answer.join("\n"))