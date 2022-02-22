// 2022-01-17
function solution(n) {
    var answer = 1;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = (i + j) * (j - i + 1)
            if (sum == 2 * n) {
                answer++
                break;
            } else if (sum > 2 * n)
                break;
        }
    }
    console.log(answer);
    return answer;
}

solution(15); //4
solution(1); // 1

// 그냥 풀어봤는데 안 풀렸다... 테스트는 총과했는데 제출하니까 0점..
// 네이버 검색해서 찾았는데 원리를 생각해서 푼 방법같다.