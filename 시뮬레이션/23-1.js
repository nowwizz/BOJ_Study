// 21610번 : 마법사 상어와 비바라기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 전체를 공백 기준으로 쪼개고 숫자로 변환 (한 배열로 쭉 나열)
const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(/\s+/)
  .map(Number);

// input 배열을 순서대로 읽기 위한 idx
let idx = 0;

// 첫 두 숫자 : N X N, 명령 M개
const N = input[idx++];
const M = input[idx++];

//N X N개의 숫자를 읽어서 board 구성
const board = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => input[idx++])
);

//M개의 (d, s) 명령 읽기
//d는 방향 (1~8), 문제에서 1부터 시작하니까 -1해서 0부터 맞춰줌
//s는 이동 칸 수
const moves = [];
for (let i = 0; i < M; i++) {
  moves.push([input[idx++] - 1, input[idx++]]);
}

// 방향: ←, ↖, ↑, ↗, →, ↘, ↓, ↙
const dr = [0, -1, -1, -1, 0, 1, 1, 1];
const dc = [-1, -1, 0, 1, 1, 1, 0, -1];

// 초기 구름
let clouds = [
  [N - 1, 0], //왼쪽 아래
  [N - 1, 1],
  [N - 2, 0],
  [N - 2, 1],
];

for (let i = 0; i < M; i++) {
  const [d, s] = moves[i];

  // 1. 구름 이동
  const moved = [];
  for (const [r, c] of clouds) {
    // (r + dr*d*s)를 그대로 하면 음수가 나올 수 있음
    // 그래서 (x % N + N) % N 형식으로 안전하게 모듈러 처리
    const nr = (r + ((dr[d] * s) % N) + N) % N;
    const nc = (c + ((dc[d] * s) % N) + N) % N;
    moved.push([nr, nc]);
    board[nr][nc] += 1; // 2. 물 += 1
  }

  // 3. 물복사 버그
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  for (const [r, c] of moved) visited[r][c] = true;

  for (const [r, c] of moved) {
    let count = 0;

    //대각선 4방향만 체크
    for (const [rr, cc] of [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ]) {
      const nr = r + rr;
      const nc = c + cc;

      // 범위 안이고 물이 1이상이면 count 증가
      if (nr >= 0 && nr < N && nc >= 0 && nc < N && board[nr][nc] > 0) {
        count++;
      }
    }
    // 해당 칸에 count만큼 물추가
    board[r][c] += count;
  }

  // 4. 새 구름 생성
  const newClouds = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c] && board[r][c] >= 2) {
        board[r][c] -= 2;
        newClouds.push([r, c]);
      }
    }
  }

  clouds = newClouds;
}

// 물 합 출력
let sum = 0;
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) sum += board[r][c];
}
console.log(sum);
