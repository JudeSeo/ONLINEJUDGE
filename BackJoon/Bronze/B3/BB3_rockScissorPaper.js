// 2023-02-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 1) {
    let num = input.splice(0, 1)[0];
    let game = input.splice(0, num);
    let a = 0, b = 0;
    game.forEach(v => {
        let temp = v.split(" ");
        if (temp[0] != temp[1]) {
            if (temp[0] == "R" && temp[1] == "S")
                a++
            else if (temp[0] == "R" && temp[1] == "P")
                b++
            else if (temp[0] == "S" && temp[1] == "P")
                a++
            else if (temp[0] == "S" && temp[1] == "R")
                b++
            else if (temp[0] == "P" && temp[1] == "R")
                a++
            else if (temp[0] == "P" && temp[1] == "S")
                b++
        }
    })
    answer.push(a > b ? "Player 1" : a < b ? "Player 2" : "TIE")
}
console.log(answer.join("\n"))