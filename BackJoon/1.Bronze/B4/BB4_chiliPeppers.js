// 2023-08-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
const pepper = {
    Poblano: 1500,
    Mirasol: 6000,
    Serrano: 15500,
    Cayenne: 40000,
    Thai: 75000,
    Habanero: 125000,
}
let answer = 0;
input.forEach(v => {
    answer += pepper[v]
})
console.log(answer)