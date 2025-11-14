const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

let queue = [[0, 0, 0, 1]]; //x, y, wall, distance
visited[0][0][0] = true;
let head = 0;

let answer = -1;

while (head < queue.length) {
  const [x, y, wall, dist] = queue[head++];

  if (x === N - 1 && y === M - 1) {
    answer = dist;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

    if (map[nx][ny] === 0 && !visited[nx][ny][wall]) {
      visited[nx][ny][wall] = true;
      queue.push([nx, ny, wall, dist + 1]);
    } else if (map[nx][ny] === 1 && wall === 0 && !visited[nx][ny][1]) {
      visited[nx][ny][1] = true;
      queue.push([nx, ny, 1, dist + 1]);
    }
  }
}

console.log(answer);
