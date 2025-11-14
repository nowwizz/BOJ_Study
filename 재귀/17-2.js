const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = Number(input[0]);
const paper = input.slice(1).map((line) => line.split(" ").map(Number));

let zero = 0;
let one = 0;
let mOne = 0;

function solution(n, m, num) {
  let zeroF = true;
  let oneF = true;
  let mOneF = true;
  for (let i = n; i < n + num; i++) {
    for (let j = m; j < m + num; j++) {
      if (paper[i][j] === 0) {
        oneF = false;
        mOneF = false;
      } else if (paper[i][j] === 1) {
        zeroF = false;
        mOneF = false;
      } else {
        zeroF = false;
        oneF = false;
      }
    }
  }

  if (oneF === true) {
    one++;
    return;
  } else if (mOneF === true) {
    mOne++;
    return;
  } else if (zeroF === true) {
    zero++;
    return;
  } else {
    solution(n, m, num / 3);
    solution(n, m + num / 3, num / 3);
    solution(n, m + (num / 3) * 2, num / 3);
    solution(n + num / 3, m, num / 3);
    solution(n + num / 3, m + num / 3, num / 3);
    solution(n + num / 3, m + (num / 3) * 2, num / 3);
    solution(n + (num / 3) * 2, m, num / 3);
    solution(n + (num / 3) * 2, m + num / 3, num / 3);
    solution(n + (num / 3) * 2, m + (num / 3) * 2, num / 3);
  }
}

solution(0, 0, N);

console.log(mOne);
console.log(zero);
console.log(one);
