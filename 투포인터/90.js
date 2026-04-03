// 2143번 : 두 배열의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const T = +input[0];
const n = +input[1];
const Aarr = input[2].split(" ").map(Number);
const m = +input[3];
const Barr = input[4].split(" ").map(Number);

const Asum = [];
const Bsum = [];

for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = i; j < n; j++) {
    sum += Aarr[j];
    Asum.push(sum);
  }
}

for (let i = 0; i < m; i++) {
  let sum = 0;
  for (let j = i; j < m; j++) {
    sum += Barr[j];
    Bsum.push(sum);
  }
}

Asum.sort((a, b) => a - b);
Bsum.sort((a, b) => a - b);

let left = 0;
let right = Bsum.length - 1;
let count = 0;

while (left < Asum.length && right >= 0) {
  let sum = Asum[left] + Bsum[right];

  if (sum === T) {
    let a = Asum[left];
    let b = Bsum[right];

    let cntA = 0;
    let cntB = 0;

    while (left < Asum.length && Asum[left] === a) {
      cntA++;
      left++;
    }

    while (right >= 0 && Bsum[right] === b) {
      cntB++;
      right--;
    }

    count += cntA * cntB;
  } else if (sum < T) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
