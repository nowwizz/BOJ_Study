// 1158번 : 요세푸스 문제

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, K] = input[0].split(" ").map(Number);

const res = [];
const num = [];
const visited = new Array(N + 1).fill(false);

for (let i = 1; i <= N; i++) {
  num.push(i);
}

let e = 0;
let ex = 1;
while (res.length < N) {
  if (!visited[num[e % N]]) {
    if (ex % K === 0) {
      res.push(num[e % N]);
      visited[num[e % N]] = true;
    }
    ex++;
  }
  e++;
}
console.log("<" + res.join(", ") + ">");
