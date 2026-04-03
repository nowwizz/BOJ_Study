// 6236번 : 용돈 관리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input
  .slice(0, input.length - 1)
  .map((x) => x.split(" ").map(Number));

let dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(0)),
);

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;

  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c] !== 0) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return dp[a][b][c];
};

for (let [a, b, c] of arr) {
  const result = w(a, b, c);
  console.log(`w(${a}, ${b}, ${c}) = ${result}`);
}
