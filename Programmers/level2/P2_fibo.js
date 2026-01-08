// 2021-12-23
function solution(n) {
    let answer = 0;
    let arr = [0, 1];
    for (let i = 1; i < n; i++) {
        arr[i + 1] = (arr[i - 1] + arr[i]) % 1234567;
    }
    answer = arr[arr.length - 1]
    console.log(answer);
    return answer;
}

solution(3);
solution(5);

// 간단한 문제라고 생각했는데 틀려서 당황...
// 1234567로 나눈 나머지를 구하라는 문구를 무심코 넘겨서 계속 틀렸던....
// 팁에서 1234567로 나눈 나머지를 보라고 말해줘서 풀 수 있었다!