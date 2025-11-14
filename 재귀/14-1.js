const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [A, B, C] = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(" ")
  .map(BigInt);

function solution(a, b) {
  if (b === 1n) return a % C;

  const half = solution(a, b / 2n);

  if (b % 2n === 0n) return (half * half) % C;
  else return (half * half * a) % C;
}

console.log(solution(A, B).toString());
