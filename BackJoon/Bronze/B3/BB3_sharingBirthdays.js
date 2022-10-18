// 2022-10-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let birthday = [];
input=input.slice(1);
input.forEach(v=>{
    if(!birthday.includes(v))
        birthday.push(v)
})
console.log(birthday.length)