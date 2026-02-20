// 11655번 : ROT13

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8");

let result = "";
for (let i = 0; i < input.length; i++) {
  const ascii = input[i].charCodeAt(0);

  if (ascii > 64 && ascii < 91) {
    result += String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
  } else if (ascii > 96 && ascii < 123) {
    result += String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
  } else {
    result += input[i];
  }
}

console.log(result);
