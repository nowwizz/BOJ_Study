// 2941번 : 크로아티아 알파벳

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

let res = 0;
for (let i = 0; i < input.length; i++) {
  if (
    input.slice(i, i + 2) === "c=" ||
    input.slice(i, i + 2) === "c-" ||
    input.slice(i, i + 2) === "d-" ||
    input.slice(i, i + 2) === "lj" ||
    input.slice(i, i + 2) === "nj" ||
    input.slice(i, i + 2) === "s=" ||
    input.slice(i, i + 2) === "z="
  ) {
    i++;
  } else if (input.slice(i, i + 3) === "dz=") {
    i += 2;
  }
  res++;
}

console.log(res);
