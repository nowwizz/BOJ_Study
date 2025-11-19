// 23288번 : 주사위 굴리기 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(/\s+/)
  .map(Number);

let idx = 0;
const N = input[idx++]; //세로
const M = input[idx++]; //가로
const K = input[idx++]; //이동 횟수

//지도
const board = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => input[idx++])
);

//동(0) 남(1) 서(2) 북(3)
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

//주사위 상태 (동서, 상하에 따라 값이 변함)
//top, bottom, north, south, east, west
let dice = {
  top: 1,
  bottom: 6,
  north: 2,
  south: 5,
  east: 3,
  west: 4,
};

//주사위 굴리는 함수
function roll(dir) {
  const { top, bottom, north, south, east, west } = dice;

  if (dir === 0) {
    //동
    dice.top = west;
    dice.bottom = east;
    dice.east = top;
    dice.west = bottom;
  } else if (dir === 1) {
    //남
    dice.top = north;
    dice.bottom = south;
    dice.north = bottom;
    dice.south = top;
  } else if (dir === 2) {
    //서
    dice.top = east;
    dice.bottom = west;
    dice.east = bottom;
    dice.west = top;
  } else {
    //북
    dice.top = south;
    dice.bottom = north;
    dice.north = top;
    dice.south = bottom;
  }
}

//BFS로 점수 계산
function bfs(sr, sc) {
  const target = board[sr][sc];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [[sr, sc]];
  visited[sr][sc] = true;
  let count = 1;

  while (queue.length) {
    const [r, c] = queue.shift();
    for (const [rr, cc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nr = r + rr;
      const nc = c + cc;

      if (
        nr >= 0 &&
        nr < N &&
        nc >= 0 &&
        nc < M &&
        !visited[nr][nc] &&
        board[nr][nc] === target
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
        count++;
      }
    }
  }

  return count * target;
}

let dir = 0; //처음 이동한 방향: 동쪽
let r = 0,
  c = 0; // 주사위 시작 위치
let answer = 0;

for (let i = 0; i < K; i++) {
  //다음 칸
  let nr = r + dr[dir];
  let nc = c + dc[dir];

  //범위 벗어나면 방향 반대로 바꿔서 다시 이동
  if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
    dir = (dir + 2) % 4;
    nr = r + dr[dir];
    nc = c + dc[dir];
  }

  //주사위 이동
  roll(dir);
  r = nr;
  c = nc;

  //1. 점수 더하기
  answer += bfs(r, c);

  //2. 방향 변경
  const A = dice.bottom;
  const B = board[r][c];

  if (A > B) {
    //시계 방향 90도
    dir = (dir + 1) % 4;
  } else if (A < B) {
    //반시계 방향 90도
    dir = (dir + 3) % 4;
  }
}

console.log(answer);
