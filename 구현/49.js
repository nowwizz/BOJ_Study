// 5525번 : IOIOI

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
const M = +input[1];
const S = input[2].split("");

let res = 0;

let i = 0;
let cnt = 0;

while (i < M - 2) {
  if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
    cnt++;
    if (cnt >= N) res++;
    i += 2;
  } else {
    cnt = 0;
    i++;
  }
}

console.log(res);
