// 8958번 : OX퀴즈

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const arr = input.slice(1, N + 2).map((x) => x.split(""));
const res = [];

for (let i = 0; i < N; i++) {
  let score = 0;
  let add = 1;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      score += add;
      add++;
    } else {
      add = 1;
    }
  }
  res.push(score);
}

console.log(res.join("\n"));
