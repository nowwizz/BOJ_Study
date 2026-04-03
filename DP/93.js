// 12865번 : 평범한 배낭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((x) => x.split(" ").map(Number));

let dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  let [weight, value] = arr[i - 1];

  for (let w = 0; w <= K; w++) {
    if (w < weight) {
      dp[i][w] = dp[i - 1][w];
    } else {
      dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
    }
  }
}

console.log(dp[N][K]);
