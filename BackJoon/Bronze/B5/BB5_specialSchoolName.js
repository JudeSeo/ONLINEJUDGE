// 2023-05-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let name = {
    NLCS: "North London Collegiate School",
    BHA: "Branksome Hall Asia",
    KIS: "Korea International School",
    SJA: "St. Johnsbury Academy",
}
console.log(name[input]);