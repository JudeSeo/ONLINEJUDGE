// 2026-01-14
package Programmers.level1;

public class P1_foodFightContest {
    public static void main(String[] args) {
        solution(new int[]{1, 3, 4, 6});
        solution(new int[]{1, 7, 1, 2});
    }

    public static String solution(int[] food) {
        String answer = "0";
        for (int i = food.length - 1; i > 0; i--) {
            int num = (int) Math.floor(food[i] / 2);
            String str = "";
            if (num != 0) str = String.format("%0" + num + "d", 0).replace("0", String.valueOf(i));
            answer = str + answer + str;
        }
        return answer;
    }
}
// 좋은 풀이는 아닌것 같다... StringBuilder를 쓰면 더 효율적이 될 것 같다.
