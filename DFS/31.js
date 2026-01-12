// 2606번 : 바이러스

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const computer = +input[0];
const linkN = +input[1];
const link = input.slice(2).map((x) => x.split(" ").map(Number));
const res = [];

const func = (num) => {
  for (let i = 0; i < linkN; i++) {
    if (num === link[i][0]) {
      if (!res.includes(link[i][1])) {
        res.push(link[i][1]);
        func(link[i][1]);
      }
    } else if (num === link[i][1]) {
      // [1, 2], [3, 1] 일 때 [3, 1]도 찾을 수 있도록 조건 추가
      if (!res.includes(link[i][0])) {
        // includes 연산은 O(n)이라 나중엔 visited로 푸는게 좋음
        res.push(link[i][0]);
        func(link[i][0]);
      }
    }
  }
};

func(1);

console.log(res.length - 1 < 0 ? 0 : res.length - 1); //연결되지 않았을 때 값이 -1이 나오지 않도록 처리
