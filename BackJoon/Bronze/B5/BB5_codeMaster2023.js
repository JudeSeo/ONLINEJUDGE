// 2024-06-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let obj = {
    SONGDO: "HIGHSCHOOL",
    CODE: "MASTER",
    2023: "0611",
    ALGORITHM: "CONTEST"
}
console.log(obj[input]);