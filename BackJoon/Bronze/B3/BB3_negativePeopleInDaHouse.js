// 2023-11-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let num = input.splice(0, 1)[0];
    let temp = input.splice(0, num);
    let people = 0;
    let leastPeople = [0];
    temp.forEach(v => {
        let tmp = v.split(" ").map(val => Number(val));
        people += tmp[0];
        people -= tmp[1];
        leastPeople.push(people);
    })
    answer.push(Math.abs(Math.min(...leastPeople)));
}
console.log(answer.join("\n"));