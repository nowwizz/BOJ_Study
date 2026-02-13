// 1764번 : 듣보잡

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const arrN = new Set(input.slice(1, N + 1));
const arrM = new Set(input.slice(N + 1, N + 2 + M));

const res = [];
for (const name of arrN) {
  if (arrM.has(name)) {
    res.push(name);
  }
}

res.sort();
console.log(res.length);
console.log(res.join("\n"));
