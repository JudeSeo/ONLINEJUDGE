// 2026-01-08
package Programmers.level1;

import java.util.HashSet;
import java.util.Set;

class P1_Phonkemon {
    public static void main(String[] args) {
        int[] num1 = {3, 1, 2, 3};
        System.out.println(solution(num1));
        int[] num2 = {3,3,3,2,2,4};
        System.out.println(solution(num2));
        int[] num3 = {3,3,3,2,2,2};
        System.out.println(solution(num3));
    }

    public static int solution(int[] nums) {
        int limit = nums.length / 2;
        Set set = new HashSet();
        for (int num : nums) {
            set.add(num);
        }
        int answer = Math.min(limit, set.size());
        return answer;
    }
}
