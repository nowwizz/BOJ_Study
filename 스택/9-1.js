const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const num = input[0];
const res = [];

for (let i = 1; i <= num; i++) {
  const arr = [];
  for (let j = 0; j < input[i].length; j++) {
    const now = input[i][j];
    if (now === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else {
      arr.push(now);
    }
  }
  res.push(arr.length > 0 ? "NO" : "YES");
}

console.log(res.join("\n"));
