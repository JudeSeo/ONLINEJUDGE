// 2022-04-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let num = input[Number(input[0].split(" ")[0]) + 1];
let array1 = input.slice(1, Number(input[0].split(" ")[0]) + 1)
let array2 = input.slice(Number(input[0].split(" ")[0]) + 2);
array2.forEach((value, index) => {
    let temp = value.split(" ");
    let i = temp[0] - 1;
    let j = temp[1] - 1;
    let x = temp[2] - 1;
    let y = temp[3] - 1;
    let sum = 0;
    for (let n = i; n <= x; n++) {
        let temp2 = array1[n].split(" ");
        for (let m = j; m <= y; m++) {
            sum += Number(temp2[m])
        }
    }
    answer.push(sum);
})
console.log(answer.join("\n"));

//시간초과...