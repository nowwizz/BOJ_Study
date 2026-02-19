// 1316번 : 그룹 단어 체커

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
const arr = input.slice(1).map((x) => x.split(""));

let res = 0;
for (let i = 0; i < N; i++) {
  let s = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (!s.includes(arr[i][j])) {
      s.push(arr[i][j]);
    } else if (s[s.length - 1] !== arr[i][j]) {
      s = [];
      break;
    }
  }
  if (s.length) res++;
}
console.log(res);
