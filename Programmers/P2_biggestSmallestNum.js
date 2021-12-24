// 2021-12-24
function solution(s) {
    var answer = '';
    var arr = s.split(" ")
    arr.sort((a, b) => { return a - b })
    answer = arr[0] + " " + arr[arr.length - 1]
    console.log(answer);
    return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");