// 2675번 : 문자열 반복

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const T = +input[0];

for (let i = 1; i <= T; i++) {
  const C = input[i].split(" ");
  const R = +C[0];
  const S = C[1].split("");
  let res = "";
  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      res += S[j];
    }
  }
  console.log(res);
}
