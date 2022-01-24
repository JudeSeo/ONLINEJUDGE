// 2022-01-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = []
let printAnswer = "";
input.forEach((v, i) => {
    let value = v.split(" ");
    if (value.length > 1)
        answer.push(value[1]);
    else {
        switch (value[0]) {
            case 'pop':
                if (answer.length <= 0)
                    printAnswer += "-1" + '\n';
                else {
                    let temp = answer.pop();
                    printAnswer += temp + '\n';
                }
                break;
            case 'size':
                printAnswer += answer.length + '\n';
                break;
            case 'empty':
                if (answer.length > 0)
                    printAnswer += 0 + '\n';
                else
                    printAnswer += 1 + '\n';
                break;
            case 'top':
                if (answer.length <= 0)
                    printAnswer += "-1\n";
                else
                    printAnswer += answer[answer.length - 1] + '\n';
                break;
        }
    }
});
console.log(printAnswer);