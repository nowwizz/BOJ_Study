// 2667번 : 단지번호붙이기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const map = input.slice(1).map((x) => x.split("").map(Number));

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const res = [];
let ex = 0;

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const func = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= N || nx < 0 || ny >= N || ny < 0) {
      continue;
    }
    if (!visited[nx][ny] && map[nx][ny] === 1) {
      ex++;
      func(nx, ny);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      ex++;
      func(i, j);
      if (ex > 0) {
        res.push(ex);
        ex = 0;
      }
    }
  }
}

res.sort((a, b) => a - b);

console.log(res.length);
res.map((x) => console.log(x));
