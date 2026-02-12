// 10799번 : 쇠막대기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split("");

const ex = [];
let res = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    res += ex.length;
    i++;
  } else if (input[i] === "(") {
    ex.push("(");
  } else if (input[i] === ")") {
    ex.pop();
    res++;
  }
}

console.log(res);
