// 2024-02-27
function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    for (var i = 0; i < score.length; i += m) {
        let temp = score.slice(i, i + m)
        if (temp.length == m)
            answer += m * temp[m - 1];
    }
    return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])