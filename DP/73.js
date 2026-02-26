// 11726번 : 2xn 타일링

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath, "utf-8"));

const dp = new Array(1001).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < 1001; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);
