// 1766번 : 문제집

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((a) => a.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);
let indegree = Array(N + 1).fill(0);

for (let [a, b] of arr) {
  graph[a].push(b);
  indegree[b]++;
}

let visited = Array(N + 1).fill(false);
let result = [];

for (let i = 0; i < N; i++) {
  let cur = -1;
  for (let j = 1; j <= N; j++) {
    if (!visited[j] && indegree[j] === 0) {
      cur = j;
      break;
    }
  }
  visited[cur] = true;
  result.push(cur);

  for (let next of graph[cur]) {
    indegree[next]--;
  }
}

console.log(result.join(" "));
