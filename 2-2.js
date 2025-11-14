const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

for (let i = 0; i < Number(input[0]); i++) {
  const str = input[i + 1];
  const left = [];
  const right = [];
  for (let j = 0; j < str.length; j++) {
    switch (str[j]) {
      case "<":
        if (left.length > 0) right.push(left.pop());
        break;
      case ">":
        if (right.length > 0) left.push(right.pop());
        break;
      case "-":
        if (left.length > 0) left.pop();
        break;
      default:
        left.push(str[j]);
        break;
    }
  }
  console.log(left.join("") + right.reverse().join(""));
}
