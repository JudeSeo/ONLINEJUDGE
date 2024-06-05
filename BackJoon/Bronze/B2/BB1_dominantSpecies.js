// 2024-06-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let [C, B, W, M] = [0, 0, 0, 0];
    temp[1].split("").forEach(val => {
        switch (val) {
            case "C":
                C++;
                break;
            case "B":
                B += 2;
                break;
            case "W":
                W += 3;
                break;
            case "M":
                M += 4;
                break;
        }
    })
    let max = Math.max(B, C, W, M);
    let arr = [B, C, W, M].sort((a, b) => b - a);
    if (arr[1] == max) answer.push(`${temp[0]}: There is no dominant species`);
    else {
        if (C == max)
            answer.push(`${temp[0]}: The Coyote is the dominant species`);
        else if (B == max)
            answer.push(`${temp[0]}: The Bobcat is the dominant species`);
        else if (W == max)
            answer.push(`${temp[0]}: The Wolf is the dominant species`);
        else if (M == max)
            answer.push(`${temp[0]}: The Mountain Lion is the dominant species`);
    }
})
console.log(answer.join("\n"));
