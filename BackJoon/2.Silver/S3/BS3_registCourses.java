import java.io.*;
import java.util.*;

public class BS3_registCourses {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());
        LinkedHashSet<String> peopleSet = new LinkedHashSet<String>();
        for (int i = 0; i < num2; i++) {
            st = new StringTokenizer(br.readLine());
            String num = st.nextToken();
            if (peopleSet.contains(num))
                peopleSet.remove(num);
            peopleSet.add(num);
        }

        ArrayList<String> arr = new ArrayList();
        Iterator<String> it = peopleSet.iterator();
        while (it.hasNext()) {
            arr.add(it.next());
        }
        int cnt = 0;
        for (String s : arr) {
            if (cnt == num1)
                break;
            sb.append(s).append("\n");
            cnt++;
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}

// 출력하는 for문을 num2제한으로 걸로 했을때 IndexOutOfBound 에러 났음...
// 향상된 for문으로 따로 변수 만들어서 하니까 통과.