// 2023-10-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let software = 0, embedded = 0, ai = 0, nothing = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] == 1) nothing++;
    else if (temp[1] == 1 || temp[1] == 2) software++;
    else if (temp[1] == 3) embedded++
    else if (temp[1] == 4) ai++;
});
console.log(software);
console.log(embedded);
console.log(ai);
console.log(nothing);