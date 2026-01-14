// 11724번 : 연결 요소의 개수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, link] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((a) => a.split(" ").map(Number));
const graph = Array.from({ length: N }, () => []);

for (const [a, b] of arr) {
  graph[a - 1].push(b);
  graph[b - 1].push(a);
}

console.log(graph);

let visited = Array(N).fill(false);
let res = 0;

const func = (num) => {
  visited[num - 1] = true;
  for (let i = 0; i < graph[num - 1].length; i++) {
    const next = graph[num - 1][i];
    if (!visited[next - 1]) {
      func(next);
    }
  }
};

for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    res++;
    func(i + 1);
  }
}
console.log(res);
