// 2022-01-05
function solution(x) {
    let answer = true;
    let num = "" + x;
    let remain = 0;
    for (let i = 0; i < num.length; i++) {
        remain += parseInt(num[i]);
    }
    if (x % remain != 0)
        answer = false;
    if (x == 0)
        answer = true
    console.log(answer);
    return answer;
}

solution(1120);
solution(1201);
solution(1105);
solution(1313);
solution(0);


// 인풋이 정수라서 아무 생각없이 그냥 풀었는데 계속 실패떠서
// 검색 후 스트링으로 바꿔서 푸니까 잘 풀렸다ㅋㅋㅋㅋ