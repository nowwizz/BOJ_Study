// 2644번 : 촌수계산

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const n = +input[0];
const [X, Y] = input[1].split(" ").map(Number);
const m = +input[2];
const R = input.slice(3, 3 + m).map((a) => a.split(" ").map(Number));

let count = 0;
let f = false;
let visited = Array(n + 1).fill(false);

const func = (A) => {
  visited[A] = true;
  if (A === Y) {
    f = true;
    return;
  }
  for (let i = 0; i < m; i++) {
    if (f === true) {
      break;
    }
    if (R[i][0] === A) {
      if (visited[R[i][1]] === false) {
        count++;
        func(R[i][1]);
        if (f === false) {
          count--;
        }
      }
    } else if (R[i][1] === A) {
      if (visited[R[i][0]] === false) {
        count++;
        func(R[i][0]);
        if (f === false) {
          count--;
        }
      }
    }
  }
};

func(X);

console.log(f ? count : -1);
