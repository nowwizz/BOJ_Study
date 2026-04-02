// 17413번 : 단어 뒤집기 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

let res = "";
let temp = "";
let tagF = false;
for (let i = 0; i < input.length; i++) {
  if (tagF) {
    res += input[i];
    if (input[i] === ">") tagF = false;
  } else if (input[i] === " " || input[i] === "<" || input[i] === ">") {
    if (input[i] === "<") tagF = true;
    for (let j = temp.length - 1; j >= 0; j--) {
      res += temp[j];
    }
    res += input[i];
    temp = "";
  } else {
    temp += input[i];
  }
}
for (let j = temp.length - 1; j >= 0; j--) {
  res += temp[j];
}

console.log(res);
