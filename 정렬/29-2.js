// 11656번 : 접미사 배열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();
const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}
arr.sort((a, b) => (a < b ? -1 : 1));

console.log(arr.join("\n"));
