// 6550번 : 부분 문자열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const arr = input.map((x) => x.split(" "));

for (let i = 0; i < arr.length; i++) {
  let ex = 0;
  for (let j = 0; j < arr[i][1].length; j++) {
    if (arr[i][1][j] === arr[i][0][ex]) {
      ex++;
    }
  }
  console.log(ex === arr[i][0].length ? "Yes" : "No");
}
