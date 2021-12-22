// 2021-12-22
function solution(s) {
    var answer = '';
    var words = s.split(" ");
    words.forEach(value => {
        var firstChar = value.charAt(0);
        var firstCharUpper = firstChar.toUpperCase();
        answer = answer + " " + firstCharUpper + value.slice(1, value.length).toLowerCase();
    });
    answer = answer.replace(" ", "");
    console.log(answer);
    return answer;
}

solution("3people unFollowed me");
solution("for the last week ");


//좀 애매한 문제인듯... 띄어쓰기 때문에 trim 썼는데 
//8번 케이스의 마지막에 공백있다는 팁을 봐서 replace로 바꾸긴 했는데 완전한 정답은 아닌것 같아 보인다...