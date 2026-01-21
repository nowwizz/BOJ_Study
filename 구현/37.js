// 2292번 : 벌집

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

let N = +input;
let res = 0;
let m = 0;

if (N === 1) {
  res = 1;
}

while (N > 1) {
  N = N - m;
  res++;
  m += 6;
}

console.log(res);
