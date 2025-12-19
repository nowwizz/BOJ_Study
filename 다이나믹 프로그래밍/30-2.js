// 9095번 : 1, 2, 3 더하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const cnt = +input[0];
const nums = input.slice(1).map((n) => +n);

const dp = Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < cnt; i++) {
  console.log(dp[nums[i]]);
}
