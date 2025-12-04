// 2024-03-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../예제.txt").toString().trim().split('\r\n');
let [n, m] = input[0].split(" ").map(v => Number(v));
let board = [];
for (let i = 1; i <= n; i++) {
    board.push(input[i].split(""));
}
let answer = 64;
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        let a = 0;
        let b = 0;
        for (let k = i; k < i + 8; k++) {
            for (let l = j; l < j + 8; l++) {
                if ((k + l) % 2 === 0) {
                    if (board[k][l] === "W") a++;
                    else b++;
                } else {
                    if (board[k][l] === "B") a++;
                    else b++;
                }
            }
        }
        if (answer > a) answer = a;
        if (answer > b) answer = b;
    }
}
console.log(answer);