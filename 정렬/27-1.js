// 1431번 : 시리얼 번호

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input.slice(1);

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;

  const sumA = a
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, n) => acc + Number(n), 0);
  const sumB = b
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, n) => acc + Number(n), 0);
  if (sumA !== sumB) return sumA - sumB;

  if (a < b) return -1; //음수면 자리 유지 (a가 앞)
  if (a > b) return 1; //양수면 자리 바꿈 (a가 뒤)

  return 0;
});

console.log(arr.join("\n"));
