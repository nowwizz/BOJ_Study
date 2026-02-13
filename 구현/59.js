// 1157. 단어 공부

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath, "utf-8").trim();

input = input.toLocaleUpperCase().split("");

input.sort();

const res = [];
let ex = "";
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (ex !== input[i]) {
    res.push([ex, count]);
    ex = input[i];
    count = 1;
  } else {
    count++;
  }
}
res.push([ex, count]);
res.sort((a, b) => b[1] - a[1]);

if (res[0][1] === res[1][1]) {
  console.log("?");
} else {
  console.log(res[0][0]);
}
