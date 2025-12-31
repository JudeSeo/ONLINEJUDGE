// 2025-12-31
package Programmers;

class P1_flexibleWorkSystem {
    public static void main(String[] args) {
        int[] schedules = {700, 800, 1100};
        int[][] timelogs = {{710, 2359, 1050, 700, 650, 631, 659}, {800, 801, 805, 800, 759, 810, 809}, {1105, 1001, 1002, 600, 1059, 1001, 1100}};
        int startday = 5;
        System.out.println(solution(schedules, timelogs, startday));
    }

    public static int solution(int[] schedules, int[][] timelogs, int startday) {
        int answer = 0;
        for (int i = 0; i < schedules.length; i++) {
            int day = startday;
            boolean flag = true;
            int maxTime = schedules[i] + 10;
            if (maxTime % 100 >= 60) {
                maxTime += 100;
                maxTime -= 60;
            }

            for (int timelog : timelogs[i]) {
                if (day > 5) {
                    day++;
                    if (day == 8) day -= 7;
                    continue;
                }
                if (timelog > maxTime) flag = false;
                day++;
            }
            if (flag) answer++;
        }

        return answer;
    }
}