// 10809번 : 알파벳 찾기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let res = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < 26; j++) {
    if (input[i] === alphabet[j]) {
      if (res[j] === -1) {
        res[j] = i;
      }
      break;
    }
  }
}
console.log(res.join(" "));
