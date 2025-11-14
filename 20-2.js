const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, S] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

let count = 0;

function dfs(start, currentSum) {
  if (start === N) return;

  if (currentSum + num[start] === S) {
    count++;
  }

  dfs(start + 1, currentSum + num[start]);

  dfs(start + 1, currentSum);
}

dfs(0, 0);

console.log(count);
