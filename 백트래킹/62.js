// 15649번 : N과 M (2)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

const arr = [];
let visited = new Array(N).fill(false);
let result = "";

const dfs = (count) => {
  if (count === M) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i] && (arr.length === 0 || arr[arr.length - 1] < i)) {
      visited[i] = true;
      arr.push(i);
      dfs(count + 1);

      arr.pop();
      visited[i] = false;
    }
  }
};

dfs(0);

console.log(result);
