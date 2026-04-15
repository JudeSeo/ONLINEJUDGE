// 2026-04-15
import java.io.*;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int answer = 0;
        int num = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 0; i < num; i++) {
            pq.add(Integer.parseInt(br.readLine()));
        }

        while (pq.size() > 1) {
            int num1 = pq.poll();
            int num2 = pq.poll();
            int temp = num1 + num2;
            answer += temp;
            pq.add(temp);
        }

        bw.write(String.valueOf(answer));
        bw.flush();
    }
}
