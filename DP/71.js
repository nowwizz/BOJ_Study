// 2579번 : 계단 오르기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
const stairs = input.slice(1).map(Number);

let score = new Array(N).fill(0);

score[0] = stairs[0];
score[1] = stairs[0] + stairs[1];
score[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < N; i++) {
  score[i] = Math.max(
    score[i - 2] + stairs[i],
    score[i - 3] + stairs[i - 1] + stairs[i],
  );
}

console.log(score[N - 1]);
