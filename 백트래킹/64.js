// 15652번 : N과 M (4)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

const arr = [];
let result = "";

const dfs = (count) => {
  if (count === M) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (arr.length === 0 || arr[arr.length - 1] <= i) {
      arr.push(i);
      dfs(count + 1);

      arr.pop();
    }
  }
};

dfs(0);
console.log(result);
