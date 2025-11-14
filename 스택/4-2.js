const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const num = Number(input[0]);
const buildings = input.slice(1).map(Number);

const stack = [];
let res = 0;
//현재 건물을 볼 수 있는 건물들을 stack에 쌓기
for (let i = 0; i < num; i++) {
  //현재 건물이 stack의 top보다 높다면
  //stack의 top은 현재 건물을 볼 수 없으니 pop
  while (stack.length > 0 && stack[stack.length - 1] <= buildings[i]) {
    stack.pop();
  }
  res += stack.length; //현재 건물을 볼 수 있는 건물들 개수 더하기
  stack.push(buildings[i]);
}

console.log(res);
