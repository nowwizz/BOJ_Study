// 7795번 : 먹을 것인가 먹힐 것인가

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const num = +input[0];
const arr = input.slice(1).map((list) => list.split(" ").map(Number));

for (let i = 0; i < num; i++) {
  const eat = arr[1 + i * 3].sort((a, b) => a - b);
  const eaten = arr[2 + i * 3].sort((a, b) => a - b);
  let res = 0;

  for (let j = 0; j < eat.length; j++) {
    for (let k = 0; k < eaten.length; k++) {
      if (eat[j] <= eaten[k]) break;
      res++;
    }
  }
  console.log(res);
}
