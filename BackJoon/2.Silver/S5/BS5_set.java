// 2022-06-09
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num = Integer.parseInt(st.nextToken());
        String answer = "";
        Boolean[] arr = new Boolean[21];
        for (int i = 0; i < num; i++) {
            st = new StringTokenizer(br.readLine());
            String word = st.nextToken();
            int number = 0;
            if (!word.equals("all") && !word.equals("empty")) {
                number = Integer.parseInt(st.nextToken());
            }
            switch (word) {
                case "add":
                    arr[number] = true;
                    break;
                case "remove":
                    arr[number] = false;
                    break;
                case "check":
                    sb.append(arr[number] != null && arr[number] ? "1\n" : "0\n");
                    break;
                case "toggle":
                    arr[number] = arr[number] == null ? true : !arr[number];
                    break;
                case "all":
                    for (int j = 1; j <= 20; j++)
                        arr[j] = true;
                    break;
                case "empty":
                    for (int j = 1; j <= 20; j++)
                        arr[j] = false;
                    break;
            }
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}


// 자바는 자바스크립트에 비해서 상당히 세세하게 시간초과를 잡는거 같다
