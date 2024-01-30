// 2023-08-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let regx = new RegExp(/(-?\d+)(\d{3})/);
let bExists = input.indexOf(".", 0);
let strArr = input.split('.');

while (regx.test(strArr[0])) {
    strArr[0] = strArr[0].replace(regx, "$1,$2");
}

if (bExists > -1) {
    input = strArr[0] + "." + strArr[1];
} else {
    input = strArr[0];
}
console.log(input);