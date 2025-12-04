// 2024-01-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let num = input.splice(0, 1)[0];
    let list = input.splice(0, num);
    let maxPrice = 0;
    let exPerson = "";
    list.forEach(v => {
        let temp = v.split(" ");
        if (maxPrice < Number(temp[0])) {
            maxPrice = Number(temp[0]);
            exPerson = temp[1];
        }
    })
    answer.push(exPerson);
}
console.log(answer.join("\n"));