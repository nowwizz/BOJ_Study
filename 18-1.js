const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

let output = [];
let visited = new Array(N + 1).fill(false);
let result = "";

// count : 현재까지 채운 숫자의 개수 (수열의 깊이)
function dfs(count) {
  if (count === M) {
    result += output.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);

      dfs(count + 1);

      output.pop();
      visited[i] = false;
    }
  }
}

dfs(0);

console.log(result.trim());
