const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const ROW = 12;
const COL = 6;
let map = input.map((line) => line.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

//같은 색 뿌요 찾는 함수
function bfs(x, y, visited) {
  const color = map[x][y];
  const queue = [[x, y]];
  const connected = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx < 0 || nx >= ROW || ny < 0 || ny >= COL) continue;
      if (!visited[nx][ny] && map[nx][ny] === color) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        connected.push([nx, ny]);
      }
    }
  }

  return connected;
}

//중력 적용 함수
function applyGravity() {
  for (let j = 0; j < COL; j++) {
    const stack = [];
    for (let i = ROW - 1; i >= 0; i--) {
      if (map[i][j] !== ".") stack.push(map[i][j]);
    }
    for (let i = ROW - 1; i >= 0; i--) {
      map[i][j] = stack[ROW - 1 - i] || ".";
    }
  }
}

let chain = 0;

while (true) {
  let visited = Array.from({ length: ROW }, () => Array(COL).fill(false));
  let popped = false;

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (map[i][j] !== "." && !visited[i][j]) {
        const connected = bfs(i, j, visited);
        if (connected.length >= 4) {
          //연결된게 4개 이상이면?
          popped = true; //터짐
          for (const [x, y] of connected) map[x][y] = "."; //터진부분은 .으로 변경
        }
      }
    }
  }

  if (!popped) break; //터진게 없으면 반복 종료
  applyGravity(); //있으면 중력 적용
  chain++; //연쇄 횟수 증가
}

console.log(chain);
