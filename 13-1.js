const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [M, N] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let idx = 0;
while (idx < queue.length) {
  const [x, y] = queue[idx];
  idx++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (box[nx][ny] === 0) {
        box[nx][ny] = box[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) {
      console.log(-1);
      process.exit();
    }
    result = Math.max(result, box[i][j]);
  }
}

console.log(result - 1);
