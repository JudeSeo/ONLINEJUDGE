// 2023-04-16
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ");
let cnt = 0;
input.forEach((v, i) => {
    if (v == "mumble") return;
    else if (v != (i + 1)) cnt++;
});
let answer = cnt == 0 ? "makes sense" : "something is fishy";
console.log(answer);