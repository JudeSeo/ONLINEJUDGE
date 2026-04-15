// 2026-04-15
import java.io.*;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        int num = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 0; i < num; i++) {
            int num1 = Integer.parseInt(br.readLine());
            if (num1 == 0) {
                Integer num2 = pq.poll();
                num2 = num2 == null ? 0 : num2;
                sb.append(num2).append("\n");
            } else
                pq.add(num1);
        }
        bw.write(sb.toString().trim());
        bw.flush();
    }
}
