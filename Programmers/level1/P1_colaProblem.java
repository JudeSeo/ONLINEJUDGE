// 2026-01-09
package Programmers.level1;

public class P1_colaProblem {
    public static void main(String[] args) {
        System.out.println(solution(3, 2, 20));
    }

    public static int solution(int a, int b, int n) {
        int answer = 0;
        while (n >= a) {
            int bin = b * (n / a);
            answer += bin;
            n = n % a + bin;

        }
        return answer;
    }
}
