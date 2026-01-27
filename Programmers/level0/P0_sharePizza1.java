// 2026-01-27
package Programmers.level0;

public class P0_sharePizza1 {
    public static void main(String[] args) {
        System.out.println(solution(7));
        System.out.println(solution(15));
    }

    public static int solution(int n) {
        int answer = (int) Math.ceil((double) n / 7);
        return answer;
    }
}
