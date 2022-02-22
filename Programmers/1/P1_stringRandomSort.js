// 2021-12-16 -> 2021-12-29
function solution(strings, n) {
    var answer = [];
    let temp = ""
    strings.sort((a, b) => {
        if (a[n] === b[n])
            return a.localeCompare(b);
        else
            return a[n].localeCompare(b[n]);
    });
    console.log(strings);
    answer = strings;
    return answer;
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);
solution(["abzcd", "cdzab", "abzfg", "abzaa", "abzbb", "bbzaa"], 2)

//예제는 잘 통과하는데 테스트 케이스에서 계속 걸린다... 왜인지 모르겠다..
//그래서 sort 람다에서 for으로 바꿨는데 안되서 검색했더니 sort로 해결한 답이 있다....
//localeCompare을 알게되었다.
