// 2022-11-28
function solution(ingredient) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length < 4)
            continue;
        if (stack[stack.length - 4] == 1 &&
            stack[stack.length - 3] == 2 &&
            stack[stack.length - 2] == 3 &&
            stack[stack.length - 1] == 1
        ) {
            answer++
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    console.log(answer)
    return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); //2


// 왜 스택으로 풀어야하는지 모르겠다.