function solution(s) {
    var answer = '';
    var a=[];
    for(var i=0;i<s.length;i++){
        a.push(s.substr(i,1));
    }
    a.sort().reverse();
    answer = a.toString().replace(/,/gi,"");
    console.log(answer);
    return answer;
}

solution("Zbcdefg");