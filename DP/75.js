// 1932번 : 정수 삼각형

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const n = +input[0];
const arr = input.slice(1).map((x) => x.split(" ").map(Number));

const dp = [...arr];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (j === 0) {
      dp[i][j] = arr[i][j] + dp[i - 1][j];
    } else if (j === arr[i].length - 1) {
      dp[i][j] = arr[i][j] + dp[i - 1][arr[i].length - 2];
    } else {
      dp[i][j] = arr[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(Math.max(...dp[n - 1]));
