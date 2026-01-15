// 1920번 : 수 찾기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N1 = +input[0];
const arr1 = input[1].split(" ").map(Number);
const N2 = +input[2];
const arr2 = input[3].split(" ").map(Number);

let res = [];

arr1.sort((a, b) => a - b);

for (let i = 0; i < N2; i++) {
  let l = 0;
  let r = N1 - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (arr2[i] === arr1[mid]) {
      res.push(1);
      break;
    } else if (arr2[i] < arr1[mid]) {
      r = mid - 1;
    } else if (arr2[i] > arr1[mid]) {
      l = mid + 1;
    }
    if (r < l) {
      res.push(0);
      break;
    }
  }
}
res.map((x) => console.log(x));
