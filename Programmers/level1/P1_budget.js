// 2022-04-04
function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => (a - b));
    d.forEach((v, i) => {
        if (budget > parseInt(v)) {
            budget -= parseInt(v);
            answer++;
        }
    });

    console.log(answer);
    return answer;
}

solution([1, 3, 2, 5, 4], 9);