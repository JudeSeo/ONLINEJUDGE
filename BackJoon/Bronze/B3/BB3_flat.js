// 2023-08-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let price = input.splice(0, 1)[0].split(" ")[1];
let totalRoom = 0;
let totalBed = 0;
let houseCost = 0;
input.forEach(v => {
    let temp = v.split(" ")
    totalRoom += Number(temp[0]);
    if (temp[1] == "bedroom")
        totalBed += Number(temp[0]);
    if (temp[1] == "balcony")
        houseCost += price * (Number(temp[0]) / 2);
    else
        houseCost += price * Number(temp[0]);
})
console.log(totalRoom);
console.log(totalBed);
console.log(houseCost);