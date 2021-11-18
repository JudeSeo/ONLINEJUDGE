function solution(n) {
    var answer = 0;
    var b=[];
    var a = n.toString();
    for(var i=0;i<a.length;i++){
        b.push(a.substr(i,1));
    }
    b.sort().reverse();
    answer = parseInt(b.toString().replace(/,/gi,""));
    console.log(answer);
    return answer;
}

solution(118372);