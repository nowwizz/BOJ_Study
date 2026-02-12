// 7576번 : 토마토

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [M, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map((x) => x.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let idx = 0;
while (idx < queue.length) {
  const [n, m] = queue[idx];
  idx++;

  for (let i = 0; i < 4; i++) {
    const nn = n + dx[i];
    const nm = m + dy[i];
    if (nn < 0 || nn >= N || nm < 0 || nm >= M) continue;
    if (map[nn][nm] === 0) {
      map[nn][nm] = map[n][m] + 1;
      queue.push([nn, nm]);
    }
  }
}

if (map.some((row) => row.includes(0))) console.log(-1);
else console.log(Math.max(...map.flat()) - 1);
