// 1874번 : 스택 수열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const n = +input[0];
const arr = input.slice(1, n + 1).map(Number);

const stack = [];
let x = 1;
let y = 0;
let res = [];

while (y < n) {
  if (arr[y] === stack[stack.length - 1]) {
    stack.pop();
    res.push("-");
    y++;
  } else if (arr[y] < stack[stack.length - 1]) {
    console.log("NO");
    return;
  } else {
    stack.push(x);
    res.push("+");
    x++;
  }
}

console.log(res.join("\n"));
