const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

// console.log(input);

const num = input.length;
const res = [];

for (let i = 0; i < num - 1; i++) {
  const arr = [];
  for (let j = 0; j < input[i].length; j++) {
    const now = input[i][j];
    if (now === "(" || now === "[") {
      arr.push(now);
    } else if (
      (now === ")" && arr[arr.length - 1]) === "(" ||
      (now === "]" && arr[arr.length - 1]) === "["
    ) {
      arr.pop();
    } else if (now === ")" || now === "]") {
      arr.push(now);
    }
  }
  res.push(arr.length > 0 ? "no" : "yes");
}

console.log(res.join("\n"));
