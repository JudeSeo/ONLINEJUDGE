// 2023-10-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].trim();
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].trim();
let type = {
    "fdsajkl;": "in-out",
    "jkl;fdsa": "in-out",
    "asdf;lkj": "out-in",
    ";lkjasdf": "out-in",
    "asdfjkl;": "stairs",
    ";lkjfdsa": "reverse"
}
let answer = type[input] ?? "molu";
console.log(answer);