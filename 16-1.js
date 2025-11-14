const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = Number(fs.readFileSync(filePath, "utf-8").trim());

let arr = Array.from({ length: N }, () => Array(N * 2).fill(" "));

const stack = [[0, N - 1, N]];

while (stack.length) {
  const [x, y, num] = stack.pop();

  if (num === 3) {
    arr[x][y] = "*";
    arr[x + 1][y - 1] = "*";
    arr[x + 1][y + 1] = "*";
    for (let i = -2; i <= 2; i++) arr[x + 2][y + i] = "*";
    continue;
  }

  stack.push([x, y, num / 2]);
  stack.push([x + num / 2, y + num / 2, num / 2]);
  stack.push([x + num / 2, y - num / 2, num / 2]);
}

console.log(arr.map((line) => line.join("")).join("\n"));
