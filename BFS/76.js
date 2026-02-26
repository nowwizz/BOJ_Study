// 1260번 : DFS와 BFS

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, M, V] = input[0].split(" ").map(Number);
const lines = input.slice(1).map((x) => x.split(" ").map(Number));

const dVisited = new Array(N + 1).fill(false);
const dRes = [V];

dVisited[V] = true;

const dfs = (x) => {
  let ex = [];
  for (let i = 0; i < M; i++) {
    if (lines[i][0] === x && !dVisited[lines[i][1]]) {
      ex.push(lines[i][1]);
    } else if (lines[i][1] === x && !dVisited[lines[i][0]]) {
      ex.push(lines[i][0]);
    }
  }
  ex = ex.sort((a, b) => a - b);
  for (let j = 0; j < ex.length; j++) {
    if (!dVisited[ex[j]]) {
      dRes.push(ex[j]);
      dVisited[ex[j]] = true;
      dfs(ex[j]);
    }
  }
};

dfs(V);

console.log(dRes.join(" "));

const bVisited = new Array(N + 1).fill(false);
bVisited[V] = true;
const bRes = [V];
let x = 0;

while (x + 1 !== N) {
  let ex = [];
  for (let i = 0; i < M; i++) {
    if (lines[i][0] === bRes[x] && !bVisited[lines[i][1]]) {
      ex.push(lines[i][1]);
    } else if (lines[i][1] === bRes[x] && !bVisited[lines[i][0]]) {
      ex.push(lines[i][0]);
    }
  }
  ex.sort((a, b) => a - b);
  for (let j = 0; j < ex.length; j++) {
    if (!bVisited[ex[j]]) {
      bRes.push(ex[j]);
      bVisited[ex[j]] = true;
    }
  }
  x++;
}

console.log(bRes.join(" "));
