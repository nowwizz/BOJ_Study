// 1181번 : 단어 정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input.slice(1);

const res = [...new Set(arr)].sort((a, b) => {
  return a.length !== b.length ? a.length - b.length : a.localeCompare(b);
});

console.log(res.join("\n"));
