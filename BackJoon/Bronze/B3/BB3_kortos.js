// 2023-10-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = ""
let b = [];
let k = [];
let s = [];
let v = [];
input.forEach(val => {
    let temp = val.split(" ");
    switch (temp[0]) {
        case "B":
            b.push(Number(temp[1]));
            break;
        case "K":
            k.push(Number(temp[1]));
            break;
        case "S":
            s.push(Number(temp[1]));
            break;
        case "V":
            v.push(Number(temp[1]));
            break;
    }
});
if (b.length != 13) {
    b.sort((a, b) => a - b);
    answer += "B ";
    b.forEach((val, i) => {
        if (answer.length == 2)
            if (val != (i + 1)) answer += (i + 1);
    })
}
if (k.length != 13) {
    k.sort((a, b) => a - b);
    answer += "K ";
    k.forEach((val, i) => {
        if (answer.length == 2)
            if (val != (i + 1)) answer += (i + 1);
    })
}
if (s.length != 13) {
    s.sort((a, b) => a - b);
    answer += "S ";
    s.forEach((val, i) => {
        if (answer.length == 2)
            if (val != (i + 1)) answer += (i + 1);
    })
}
if (v.length != 13) {
    v.sort((a, b) => a - b);
    answer += "V ";
    v.forEach((val, i) => {
        if (answer.length == 2)
            if (val != (i + 1)) answer += (i + 1);
    })
}
if(answer.length == 2) answer += "13"
console.log(answer);