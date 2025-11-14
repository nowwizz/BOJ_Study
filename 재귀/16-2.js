const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = Number(input[0]);
const paper = input.slice(1).map((line) => line.split(" ").map(Number));

let blue = 0;
let white = 0;

function solution(n, m, num) {
  let blueF = true;
  let whiteF = true;
  for (let i = n; i < n + num; i++) {
    for (let j = m; j < m + num; j++) {
      if (paper[i][j] === 1) {
        whiteF = false;
      } else {
        blueF = false;
      }
    }
  }

  if (blueF === true) {
    blue++;
    return;
  } else if (whiteF === true) {
    white++;
    return;
  } else {
    solution(n, m, num / 2);
    solution(n, m + num / 2, num / 2);
    solution(n + num / 2, m, num / 2);
    solution(n + num / 2, m + num / 2, num / 2);
  }
}

solution(0, 0, N);

console.log(white);
console.log(blue);
