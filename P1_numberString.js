function solution(s) {
    var answer = 0;
    var num1 = {
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        "zero":0
    }
    var num2 = {
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        0:"zero"
    }
    for(var i=0;i<50;i++){
        while(s.indexOf(num2[i]) != -1){
            if(s.indexOf(num2[i]) == -1)
                break;
            s = s.replace(num2[i], num1[num2[i]]);
        }
    }
    answer = parseInt(s);
    console.log(answer);
    return answer;
}

solution("1zerotwozero3");