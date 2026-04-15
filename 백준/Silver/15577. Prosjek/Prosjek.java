import java.io.*;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int num = Integer.parseInt(br.readLine());
        PriorityQueue<Double> pq = new PriorityQueue<>();
        for (int i = 0; i < num; i++) {
            pq.add(Double.parseDouble(br.readLine()));
        }
        while (pq.size() > 1) {
            double num1 = pq.poll();
            double num2 = pq.poll();
            pq.add((num1 + num2) / 2);
        }
        double answer = pq.poll();

        bw.write(String.format("%.6f", answer));
        bw.flush();
    }
}
