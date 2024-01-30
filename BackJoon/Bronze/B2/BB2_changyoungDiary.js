// 2024-01-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let i = 0;
let garbage = "";
while (i < input.length) {
    switch (input[i]) {
        case "a":
            garbage = input.splice(i, 2);
            break;
        case "e":
            garbage = input.splice(i, 2);
            break;
        case "i":
            garbage = input.splice(i, 2);
            break;
        case "o":
            garbage = input.splice(i, 2);
            break;
        case "u":
            garbage = input.splice(i, 2);
            break;
    }
    i++;
}
console.log(input.join(""));