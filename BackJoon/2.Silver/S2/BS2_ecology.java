// 2022-06-13

import java.io.*;
import java.util.Map;
import java.util.TreeMap;

public class BS2_ecology {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Map<String, Double> map = new TreeMap();
        StringBuilder sb = new StringBuilder();
//        StringTokenizer st = new StringTokenizer(br.readLine());
        String str = "";
        double cnt = 0;
        while ((str = br.readLine()) != null) {
            map.put(str, map.getOrDefault(str, 0.0) + 1);
            cnt++;
        }
        for (String s : map.keySet()) {
            String rate = String.format("%.4f", (map.get(s) * 1000000 / cnt / 10000.0));
            sb.append(s).append(" ").append(rate).append("\n");
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
