// 2026-04-16
import java.io.*;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        int num = Integer.parseInt(br.readLine());
        for (int i = 0; i < num; i++) {
            int num1 = Integer.parseInt(br.readLine());
            String input = br.readLine();
            String[] arr = input.split(" ");
            PriorityQueue<Long> pq = new PriorityQueue<>();
            long answer = 0;
            for (int j = 0; j < num1; j++) {
                pq.add(Long.parseLong(arr[j]));
            }
            while (pq.size() > 1) {
                long num2 = pq.poll();
                long num3 = pq.poll();
                long temp = num2 + num3;
                answer += temp;
                pq.add(temp);
            }
            sb.append(answer).append("\n");
        }

        bw.write(sb.toString().trim());
        bw.flush();
    }
}