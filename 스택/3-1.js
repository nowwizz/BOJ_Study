const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const res = [];
let sum = 0;

for (let i = 1; i < Number(input[0]) + 1; i++) {
  if (Number(input[i]) === 0) {
    res.pop();
  } else {
    res.push(Number(input[i]));
  }
}

sum = res.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
