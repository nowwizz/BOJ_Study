// 9095번 : 1, 2, 3 더하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const T = +input[0];
const arr = input.slice(1).map(Number);
let dp = new Array(12).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 12; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[arr[i]]);
}
