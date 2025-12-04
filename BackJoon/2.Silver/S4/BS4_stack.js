// 2022-01-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
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


// 바로 콘솔로 찍어내는 식으로 소스 짰더니 시간초과...
// 스트링에 넣고 마지막에 한방에 출력 하니까 됐다!
