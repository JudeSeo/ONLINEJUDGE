// 2021-11-12
function solution(phone_number) {
    let answer = '';
    let leng = phone_number.length;
    for(let i=4;i<leng;i++)
        answer += "*";
    answer += phone_number.substr(leng-4)
    console.log(answer);
    return answer;
}
// for문 없이 만드는 법이 필요할거 같다
//없으면 점수 더 높을듯
solution("458073986990845");