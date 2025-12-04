// 2022-04-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input.forEach(v => {
    let stack = [];
    let answer = "no";
    let check = true;
    if (v[0] == '.')
        return;

    for (let i = 0; i < v.length; i++) {
        switch (v[i]) {
            case '(':
                stack.push(v[i]);
                break;
            case ')':
                if (stack[stack.length - 1] != '(')
                    check = false;
                stack.pop();
                break;
            case '[':
                stack.push(v[i]);
                break;
            case ']':
                if (stack[stack.length - 1] != '[')
                    check = false;
                stack.pop();
                break;
        }
    }
    if (stack.length == 0 && check)
        answer = "yes";

    console.log(answer);
})