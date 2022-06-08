var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach((v, i) => {
    if (i % 2 == 0)
        return;
    else {
        let temp = v.split(" ");
        let arr = ""
        temp.forEach(value => {
            if (arr != "" && arr[0] >= value)
                arr = value + arr;
            else
                arr += value;
        })
        answer.push(arr);
    }
})

console.log(answer.join("\n"));
