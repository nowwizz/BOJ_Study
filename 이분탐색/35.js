// 10815번 : 숫자 카드

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const NArr = input[1].split(" ").map(Number);
const M = +input[2];
const MArr = input[3].split(" ").map(Number);

let res = "";

NArr.sort((a, b) => a - b);

for (let i = 0; i < M; i++) {
  let l = 0;
  let r = N - 1;
  while (r >= l) {
    const mid = Math.floor((r + l) / 2);
    if (MArr[i] === NArr[mid]) {
      res += "1 ";
      break;
    } else if (MArr[i] < NArr[mid]) {
      r = mid - 1;
    } else if (MArr[i] > NArr[mid]) {
      l = mid + 1;
    }
    if (r < l) {
      res += "0 ";
    }
  }
}

console.log(res.slice(0, res.length - 1));
