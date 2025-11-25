// 2751번 : 수 정렬하기 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
