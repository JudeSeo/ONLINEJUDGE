function solution(s) {
    var answer = false;

    if(s.length == 4 || s.length == 6){
        if (!isNaN(s))
            answer = true;
    }
    if(s.includes("e"))
        answer = false;
    console.log(answer);
    return answer;
}

solution("1234");
solution("a123");
solution("1e22");