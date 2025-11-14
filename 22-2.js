const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M, x, y, K] = input[0].split(" ").map(Number);
const map = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const moves = input[N + 1].split(" ").map(Number);

let dice = [0, 0, 0, 0, 0, 0];
let cx = x;
let cy = y;

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let cmd of moves) {
  const dir = cmd - 1;

  const nx = cx + dx[dir];
  const ny = cy + dy[dir];

  if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

  let [top, bottom, north, south, west, east] = dice;

  if (cmd === 1) {
    dice = [west, east, north, south, bottom, top];
  } else if (cmd === 2) {
    dice = [east, west, north, south, top, bottom];
  } else if (cmd === 3) {
    dice = [south, north, top, bottom, west, east];
  } else if (cmd === 4) {
    dice = [north, south, bottom, top, west, east];
  }

  cx = nx;
  cy = ny;

  if (map[cx][cy] === 0) {
    map[cx][cy] = dice[1];
  } else {
    dice[1] = map[cx][cy];
    map[cx][cy] = 0;
  }

  console.log(dice[0]);
}
