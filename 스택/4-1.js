const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const num = Number(input[0]);
const top = input[1].split(" ").map(Number);
const res = Array(num).fill(0);
const stack = [];

for (let i = 0; i < num; i++) {
  //현재 탑이 stack의 top보다 크다면
  //현재 탑의 레이저가 stack에 top에 닿을리가 없으니 pop
  while (stack.length > 0 && top[stack[stack.length - 1]] <= top[i]) {
    stack.pop();
  }
  //남은 stack 중에 top이 현재 탑의 레이저에 닿음
  if (stack.length > 0) {
    res[i] = stack[stack.length - 1] + 1; //stack의 top의 순서를 저장
  }

  stack.push(i);
}

console.log(res.join(" "));
