// 2023-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v == "0 0 0") return;
    let temp = v.split(" ").map(val => Number(val))
    let num = "Triangle #" + (i + 1), l = 0, str = "";
    if (temp[0] == -1) {
        l = Math.sqrt(temp[2] ** 2 - temp[1] ** 2)
        if (l > 0)
            str = "a = " + l.toFixed(3);
        else
            str = "Impossible.";
    } else if (temp[1] == -1) {
        l = Math.sqrt(temp[2] ** 2 - temp[0] ** 2)
        if (l > 0)
            str = "b = " + l.toFixed(3);
        else
            str = "Impossible.";
    } else if (temp[2] == -1) {
        l = Math.sqrt(temp[0] ** 2 + temp[1] ** 2)
        if (l > 0)
            str = "c = " + l.toFixed(3);
        else
            str = "Impossible.";
    }
    answer.push(num + "\n" + str)
})
console.log(answer.join("\n\n"));
