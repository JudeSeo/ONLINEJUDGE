// 2022-01-04
function solution(number, k) {
    let answer = '';
    let max = 0;
    let index = 0;
    let length = number.length;
    for (let i = 0; i < length - k; i++) {
        for (let j = index; j <= k + i; j++) {
            if (number.charAt(j) == '9') {
                max = number.charAt(j) - '0';
                index = j + 1;
                break;
            } else if (max < number.charAt(j) - '0') {
                max = number.charAt(j) - '0';
                index = j + 1;
            }
        }
        answer += max;
        max = 0;
    }
    console.log(answer);
    return answer;
}

solution("1924", 2);
solution("1231234", 3);
solution("4177252841", 4);