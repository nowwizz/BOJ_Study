const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = Number(input[0]);
const video = input.slice(1).map((line) => line.split("").map(Number));

let result = "";

function compress(row, col, size) {
  const first = video[row][col];
  let same = true;

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (video[i][j] !== first) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }
  if (same) {
    result += first;
  } else {
    result += "(";
    const half = size / 2;
    compress(row, col, half); //왼쪽 위
    compress(row, col + half, half); //오른쪽 위
    compress(row + half, col, half); //왼쪽 아래
    compress(row + half, col + half, half); //오른쪽 아래
    result += ")";
  }
}

compress(0, 0, N);
console.log(result);
