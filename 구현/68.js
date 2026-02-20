// 1212번 : 8진수 2진수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

if (input === "0") {
  console.log("0");
  return;
}

let res = "";

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i], 8).toString(2);

  if (i === 0) {
    res += n;
  } else {
    res += n.padStart(3, "0");
  }
}

console.log(res);
