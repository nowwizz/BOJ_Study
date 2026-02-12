// 10988번 : 펠린드롬인지 확인하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split("");

const stack = [];

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  stack.push(input[i]);
}
for (let i = Math.floor(input.length / 2); i < input.length; i++) {
  if (stack[stack.length - 1] === input[i]) stack.pop();
}

console.log(stack.length ? 0 : 1);
