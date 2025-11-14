const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

const arr = [];
let res = 0;
let ex = 1;

for (let i = 0; i < input.length; i++) {
  const now = input[i];
  const prev = i === 0 ? "" : input[i - 1];

  if (now === "(") {
    ex *= 2;
    arr.push(now);
  } else if (now === "[") {
    ex *= 3;
    arr.push(now);
  } else if (now === ")") {
    if (arr.length === 0 || arr[arr.length - 1] !== "(") {
      res = 0;
      break;
    }
    if (prev === "(") res += ex;
    arr.pop();
    ex /= 2;
  } else if (now === "]") {
    if (arr.length === 0 || arr[arr.length - 1] !== "[") {
      res = 0;
      break;
    }
    if (prev === "[") res += ex;
    arr.pop();
    ex /= 3;
  }
}
console.log(arr.length !== 0 ? "0" : res);
