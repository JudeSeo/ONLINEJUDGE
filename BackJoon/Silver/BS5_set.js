var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let arr = [];
input = input.slice(1);
input.forEach((v, i) => {
    let [string, num] = v.split(" ");
    switch (string) {
        case "add":
            arr[num] = 1;
            break;
        case "remove":
            arr[num] = 0;
            break;
        case "check":
            arr[num] == 1 ? answer.push(1) : answer.push(0);
            break;
        case "toggle":
            arr[num] == 1 ? arr[num] = 0 : arr[num] = 1;
            break;
        case "all":
            for (let j = 1; j <= 20; j++)
                arr[j] = 1;
            break;
        case "empty":
            arr.length = 0;
            break;

    }
})

console.log(answer.join("\n"));

// js 메모리 설정이 없어서 메모리초과만 뜸
