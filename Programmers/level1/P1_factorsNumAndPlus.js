// 2022-11-29
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let temp = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) temp++;
        }
        if (temp % 2 == 0) answer += i;
        else answer -= i;
    }
    console.log(answer)
    return answer;
}

solution(13, 17);
solution(24, 27);
