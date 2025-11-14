const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

const arr = [];
let res = 0;
let bar = 0;

for (let i = 0; i < input.length; i++) {
  const now = input[i];
  const after = i === input.length - 1 ? "" : input[i + 1];

  if (now + after === "()") {
    if (arr.length > 0) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "(") res++;
      }
    }
    i++;
  } else {
    if (now === "(") {
      arr.push(now);
      bar++;
    } else if (now === ")") {
      arr.pop();
    }
  }
}
console.log(res + bar);
