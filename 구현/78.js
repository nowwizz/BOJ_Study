// 1436번 : 영화감독 숌

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath, "utf-8").trim());

let num = 666;
let count = 0;
while (1) {
  if (String(num).includes("666")) {
    count++;
  }
  if (count === input) {
    console.log(num);
    break;
  }
  num++;
}
