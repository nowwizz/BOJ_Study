// 5622번 : 다이얼

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split("");

const arr = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

let res = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].includes(input[i])) {
      res += j + 3;
      break;
    }
  }
}

console.log(res);
