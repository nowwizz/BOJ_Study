// 10815번 : 숫자 카드

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
const arrN = input[1].split(" ").map(Number);
const M = +input[2];
const arrM = input[3].split(" ").map(Number);

const res = [];

arrN.sort((a, b) => a - b);

for (let i = 0; i < M; i++) {
  let f = 0;
  let b = N - 1;

  while (f <= b) {
    const mid = Math.floor((f + b) / 2);

    if (arrN[mid] === arrM[i]) {
      res.push(1);
      break;
    } else if (arrN[mid] < arrM[i]) {
      f = mid + 1;
    } else if (arrN[mid] > arrM[i]) {
      b = mid - 1;
    }
    if (f > b) {
      res.push(0);
      break;
    }
  }
}
console.log(res.join(" "));
