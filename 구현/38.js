// 1018번 : 체스판 다시 칠하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map((a) => a.split(""));

const res = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let B = 0;
    let W = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if ((k + l) % 2 === 1) {
          if (arr[k][l] === "B") {
            W++;
          } else {
            B++;
          }
        } else {
          if (arr[k][l] === "B") {
            B++;
          } else {
            W++;
          }
        }
      }
    }
    res.push(Math.min(W, B));
  }
}

console.log(Math.min(...res));
