const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

let output = [];
let result = "";

// count : 현재까지 채운 숫자의 개수 (수열의 깊이)
function dfs(count, start) {
  if (count === M) {
    result += output.join(" ") + "\n";
    return;
  }

  for (let i = start; i <= N; i++) {
    output.push(i);

    dfs(count + 1, i + 1);

    output.pop();
  }
}

dfs(0, 1);

console.log(result.trim());
