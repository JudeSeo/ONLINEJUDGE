// 2021-12-13
function solution(n, m) {
    let answer = [];
    let bigger = n > m ? n : m;
    let smaller = n > m ? m : n
    if (bigger % smaller == 0) {
        answer.push(smaller);
        answer.push(bigger);
    } else {
        for (let i = smaller; i >= 1; i--) {
            let div1 = bigger % i
            let div2 = smaller % i
            if (div1 == 0 && div2 == 0) {
                answer.push(i);
                break;
            }
        }
        let mul1 = bigger / answer[0];
        let mul2 = smaller / answer[0];
        answer.push(mul1 * mul2 * answer[0]);
    }
    console.log(answer);
    return answer;
}

solution(3, 12);
solution(2, 5);