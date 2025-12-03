// 5648번 : 역원소 정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input
  .join(" ")
  .split(" ")
  .slice(1)
  .filter(Boolean)
  .map((number) => BigInt(number.split("").reverse().join("")));

arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

console.log(arr.join("\n"));
