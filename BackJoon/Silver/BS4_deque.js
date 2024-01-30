// 2023-12-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1);
let answer = [];
let deque = [];
input.forEach(v => {
    let temp = v.split(" ");
    switch (temp[0]) {
        case "push_front" :
            deque = [temp[1], ...deque];
            break;
        case "push_back" :
            deque.push(temp[1]);
            break;
        case "pop_front" :
            if (deque.length == 0)
                answer.push(-1);
            else
                answer.push(deque.splice(0, 1)[0]);
            break;
        case "pop_back" :
            if (deque.length == 0)
                answer.push(-1);
            else
                answer.push(deque.pop());
            break;
        case "size" :
            answer.push(deque.length);
            break;
        case "empty" :
            if (deque.length == 0)
                answer.push(1);
            else
                answer.push(0);
            break;
        case "front" :
            if (deque.length == 0)
                answer.push(-1);
            else
                answer.push(deque[0]);
            break;
        case "back" :
            if (deque.length == 0)
                answer.push(-1);
            else
                answer.push(deque[deque.length - 1]);
            break;

    }
})

console.log(answer.join("\n"));
