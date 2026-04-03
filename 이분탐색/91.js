// 6236번 : 용돈 관리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

let left = Math.max(...arr);
let right = 0;
for (let i = 0; i < N; i++) {
  right += arr[i];
}

let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let nowMoney = mid;
  let count = 1;

  for (let i = 0; i < N; i++) {
    if (nowMoney < arr[i]) {
      nowMoney = mid;
      count++;
    }
    nowMoney -= arr[i];
  }

  if (count <= M) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
