// 2164번 : 카드2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = +fs.readFileSync(filePath, "utf-8").trim();

let arr = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;

while (arr.length - head > 1) {
  head++;
  arr.push(arr[head]);
  head++;
}

console.log(arr[arr.length - 1]);
