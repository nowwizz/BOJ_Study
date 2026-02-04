// 1448번 : 삼각형 만들기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const arr = input.slice(1, N + 2).map(Number);

arr.sort((a, b) => b - a);

for (let i = 0; i < N - 2; i++) {
  if (arr[i] < arr[i + 1] + arr[i + 2]) {
    console.log(arr[i] + arr[i + 1] + arr[i + 2]);
    break;
  }
  if (i === N - 3) {
    console.log(-1);
  }
}
