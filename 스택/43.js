// 2164번 : 카드2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const T = +input[0];
const arr = input.slice(1, input.length + 1).map((x) => x.split(""));

for (let i = 0; i < T; i++) {
  let ex = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (ex[ex.length - 1] === "(" && arr[i][j] === ")") ex.pop();
    else ex.push(arr[i][j]);
  }
  if (ex.length === 0) console.log("YES");
  else console.log("NO");
}
