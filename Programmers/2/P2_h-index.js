// 2021-12-20
function solution(citations) {
    let answer = 0;
    citations.sort(function (a, b) { return a - b });
    console.log(citations);
    for (let i = 0; i <= citations[citations.length - 1]; i++) {
        let cnt = 0;
        let mcnt = 0
        citations.forEach((value) => {
            if (value >= i)
                cnt++;
        });
        if (cnt == i) {
            answer = i;
            break;
        } else if (cnt > i) {
            for (let j = 0; j < i; j++) {
                if (citations[j] < i) {
                    answer = i;
                    break;
                }
            }
        }
    }
    console.log(answer);
    return answer;
}

solution([3, 0, 6, 1, 5]);
solution([12, 11, 10, 9, 8, 1]);
solution([0, 0, 0, 0, 1]);
solution([0, 1, 2])

// 테스트 11번이 유난히 안 풀려서 어려웠다.. 11번이 풀리면 9번이 안 풀려서 당황ㅋㅋㅋㅋ
// 그래도 다 풀어서 다행이다 처음으로 10점 받아봤다!