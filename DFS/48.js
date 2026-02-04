// 2468번 : 안전 영역

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const map = input.slice(1, N + 2).map((x) => x.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let visited = Array.from({ length: N }, () => Array(N).fill(false));
const res = [];

let area = 0;

const func = (n, x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const cx = dx[i] + x;
    const cy = dy[i] + y;
    if (cx < 0 || cx >= N || cy < 0 || cy >= N) continue;
    if (visited[cx][cy] === false && map[cx][cy] > n) {
      func(n, cx, cy);
    }
  }
};

let rain = 0;

while (1) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === false && map[i][j] > rain) {
        area++;
        func(rain, i, j);
      }
    }
  }
  if (area === 0) break;
  else {
    res.push(area);
    visited = Array.from({ length: N }, () => Array(N).fill(false));
    area = 0;
    rain++;
  }
}

console.log(Math.max(...res));
