package Programmers.level0;

public class P0_division {
    public static void main(String[] args) {
        System.out.println(solution(1, 16));
    }

    public static int solution(int num1, int num2) {
        int answer = num1 * 1000 / num2;
        return answer;
    }
}
