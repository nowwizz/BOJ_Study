// 1966번 : 프린터 큐

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const C = +input[0];

for (let i = 0; i < C; i++) {
  const [N, M] = input[1 + i * 2].split(" ").map(Number);
  const arr = input[2 + i * 2].split(" ").map(Number);
  let res = 0;
  let ex = M;

  while (1) {
    if (arr[0] === Math.max(...arr)) {
      if (ex === 0) {
        res++;
        break;
      }
      arr.shift();
      ex--;
      res++;
    } else {
      if (ex === 0) {
        ex += arr.length;
      }
      arr.push(arr[0]);
      arr.shift();
      ex--;
    }
  }
  console.log(res);
}
