// 7569번 : 토마토

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [M, N, H] = input[0].split(" ").map(Number);
const box = input.slice(1).map((x) => x.split(" ").map(Number));
const boxes = [];
const queue = [];

for (let i = 0; i < H; i++) {
  const ex1 = [];
  for (let j = i * N; j < N * (i + 1); j++) {
    const ex2 = [];
    for (let k = 0; k < M; k++) {
      ex2.push(box[j][k]);
    }
    ex1.push(ex2);
  }
  boxes.push(ex1);
}

const dm = [0, 0, -1, 1, 0, 0];
const dn = [0, 0, 0, 0, -1, 1];
const dh = [-1, 1, 0, 0, 0, 0];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] === 1) queue.push([i, j, k]);
    }
  }
}

let idx = 0;
while (idx < queue.length) {
  const [h, n, m] = queue[idx];
  idx++;

  for (let i = 0; i < 6; i++) {
    const [nn, nm, nh] = [n + dn[i], m + dm[i], h + dh[i]];

    if (nn < 0 || nn >= N || nm < 0 || nm >= M || nh < 0 || nh >= H) continue;
    if (boxes[nh][nn][nm] === 0) {
      boxes[nh][nn][nm] = boxes[h][n][m] + 1;
      queue.push([nh, nn, nm]);
    }
  }
}

let result = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] === 0) {
        console.log(-1);
        process.exit();
      }
      if (boxes[i][j][k] > result) result = boxes[i][j][k];
    }
  }
}
console.log(Math.max(...boxes.flat(2)) - 1);
