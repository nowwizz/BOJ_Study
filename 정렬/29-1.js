// 10825번 : 국영수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const num = +input[0];
const arr = input.slice(1).map((line) => {
  const [name, kor, eng, math] = line.split(" ");
  return [name, Number(kor), Number(eng), Number(math)];
});

arr.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];

  if (a[2] !== b[2]) return a[2] - b[2];

  if (a[3] !== b[3]) return b[3] - a[3];

  return a[0] < b[0] ? -1 : 1;
});

console.log(arr.map((x) => x[0]).join("\n"));
