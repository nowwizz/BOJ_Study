// 2805번 : 나무 자르기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let res = [];

let l = 0;
let r = Math.max(...arr);

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i] - mid > 0 ? arr[i] - mid : 0;
  }
  if (sum === M) {
    res = [mid];
    break;
  } else if (sum > M) {
    l = mid + 1;
    res.push(mid);
  } else if (sum < M) {
    r = mid - 1;
  }
}

let R = Math.max(...res);

console.log(R);
