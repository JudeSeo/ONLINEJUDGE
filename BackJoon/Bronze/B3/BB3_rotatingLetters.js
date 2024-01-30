// 2023-09-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
const letter = ["I", "O", "S", "H", "Z", "X", "N"]
let flag = true
input.forEach(v => {
    if (!letter.includes(v))
        flag = false;
})
if (flag) console.log("YES");
else console.log("NO");