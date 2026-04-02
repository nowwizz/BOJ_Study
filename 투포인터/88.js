// 1253번 : 좋다

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
let arr = input[1].split(" ").map(Number);
let count = 0;

arr.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  let target = arr[i];
  let left = 0;
  let right = N - 1;

  while (left < right) {
    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }

    const sum = arr[left] + arr[right];

    if (sum === target) {
      count++;
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(count);
