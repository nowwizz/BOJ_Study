const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const num = input[0];
let cnt = 0;

for (let i = 1; i <= num; i++) {
  const arr = [];
  for (let j = 0; j < input[i].length; j++) {
    const now = input[i][j];
    if (arr[arr.length - 1] === now) {
      arr.pop();
    } else {
      arr.push(now);
    }
  }
  if (arr.length === 0) cnt++;
}
console.log(cnt);
