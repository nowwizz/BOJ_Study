const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
const board = input.slice(1).map((line) => line.split(" ").map(Number));

let black = [];
let white = [];
let maxBlack = 0,
  maxWhite = 0;

//대각선 체크용 배열
let diag1 = new Array(2 * N).fill(false);
let diag2 = new Array(2 * N).fill(false);

//칸 색 구분 (검은 칸 / 흰 칸)
//행, 열을 더했을 때 짝수면 검은 칸, 홀수면 흰 칸
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (board[r][c] === 1) {
      if ((r + c) % 2 === 0) black.push([r, c]);
      else white.push([r, c]);
    }
  }
}

function dfs(index, count, arr, color) {
  //다 돌았으면 최댓값 갱신
  if (index === arr.length) {
    if (color === "black") maxBlack = Math.max(maxBlack, count);
    else maxWhite = Math.max(maxWhite, count);
    return;
  }

  const [r, c] = arr[index];

  //놓을 수 있으면
  if (!diag1[r + c] && !diag2[r - c + N - 1]) {
    diag1[r + c] = diag2[r - c + N - 1] = true;

    dfs(index + 1, count + 1, arr, color);

    diag1[r + c] = diag2[r - c + N - 1] = false;
  }

  //안 놓는 경우도 탐색
  dfs(index + 1, count, arr, color);
}

//검은 칸 탐색
dfs(0, 0, black, "black");
dfs(0, 0, white, "white");

console.log(maxBlack + maxWhite);
