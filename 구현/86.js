// 9012번 : 괄호

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const T = +input[0];
const arr = input.slice(1).map((x) => x.split(""));

for (let i = 0; i < T; i++) {
  const temp = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "(") temp.push("(");
    else if (arr[i][j] === ")") {
      if (temp.length > 0 && temp[temp.length - 1] === "(") {
        temp.pop();
      } else {
        temp.push(")");
      }
    }
  }
  if (temp.length > 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
