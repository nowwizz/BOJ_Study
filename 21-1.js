const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

const dirs = [
  [-1, 0], //위
  [0, 1], //오른쪽
  [1, 0], //아래
  [0, -1], //왼쪽
];

//CCTV 방향 조합
const cctvDirs = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  5: [[0, 1, 2, 3]],
};

const cctvs = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] >= 1 && map[i][j] <= 5) {
      cctvs.push([i, j, map[i][j]]);
    }
  }
}

let minBlind = Infinity;

//맵 복사 함수
function copyMap(origin) {
  return origin.map((row) => row.slice());
}

//감시 함수
function watch(board, x, y, dir) {
  const [dx, dy] = dirs[dir];
  let nx = x + dx;
  let ny = y + dy;

  while (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] !== 6) {
    if (board[nx][ny] === 0) board[nx][ny] = -1;
    nx += dx;
    ny += dy;
  }
}

//DFS로 모든 CCTV 방향 조합 탐색
function dfs(depth, board) {
  if (depth === cctvs.length) {
    let blind = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 0) blind++;
      }
    }
    minBlind = Math.min(minBlind, blind);
    return;
  }

  const [x, y, type] = cctvs[depth];
  for (const dirsSet of cctvDirs[type]) {
    const copied = copyMap(board);
    for (const d of dirsSet) {
      watch(copied, x, y, d);
    }
    dfs(depth + 1, copied);
  }
}

dfs(0, map);
console.log(minBlind);
