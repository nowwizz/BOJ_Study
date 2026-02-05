// 1920번 : 수 찾기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const arr1 = input[1].split(" ").map(Number);
const M = +input[2];
const arr2 = input[3].split(" ").map(Number);

arr1.sort((a, b) => a - b);

for (let i = 0; i < M; i++) {
  let f = 0;
  let b = N - 1;
  while (f <= b) {
    const mid = Math.floor((f + b) / 2);
    if (arr1[mid] === arr2[i]) {
      console.log(1);
      break;
    } else if (arr1[mid] > arr2[i]) {
      b = mid - 1;
    } else if (arr1[mid] < arr2[i]) {
      f = mid + 1;
    }
    if (f > b) {
      console.log(0);
      break;
    }
  }
}
