// 2026-04-15
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        int num = Integer.parseInt(br.readLine());
        for (int i = 0; i < num; i++) {
            int num1 = Integer.parseInt(br.readLine());
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();
            PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
            Map<Integer, Integer> map = new HashMap<>();
            int size = 0;

            for (int j = 0; j < num1; j++) {
                StringTokenizer st = new StringTokenizer(br.readLine());
                String reg = st.nextToken();
                int num2 = Integer.parseInt(st.nextToken());
                if (reg.equals("I")) {
                    minHeap.add(num2);
                    maxHeap.add(num2);
                    map.put(num2, map.getOrDefault(num2, 0) + 1);
                    size++;
                } else if (reg.equals("D") && size > 0) {
                    if (num2 == 1) {
                        // 최대값 삭제
                        while (!maxHeap.isEmpty()) {
                            int x = maxHeap.poll();
                            if (map.getOrDefault(x, 0) > 0) {
                                map.put(x, map.get(x) - 1);
                                break;
                            }
                        }
                        size--;
                    } else {
                        // 최솟값 삭제
                        while (!minHeap.isEmpty()) {
                            int x = minHeap.poll();
                            if (map.getOrDefault(x, 0) > 0) {
                                map.put(x, map.get(x) - 1);
                                break;
                            }
                        }
                        size--;
                    }
                }
            }
            while (!minHeap.isEmpty() && map.getOrDefault(minHeap.peek(), 0) == 0) {
                minHeap.poll();
            }
            while (!maxHeap.isEmpty() && map.getOrDefault(maxHeap.peek(), 0) == 0) {
                maxHeap.poll();
            }

            if (minHeap.isEmpty()) {
                sb.append("EMPTY\n");
            } else {
                sb.append(maxHeap.peek()).append(" ").append(minHeap.peek()).append("\n");
            }
            minHeap.clear();
            maxHeap.clear();
        }
        bw.write(sb.toString().trim());
        bw.flush();
    }
}