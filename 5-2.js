const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const num = input[0];
let res = [];
let f = 0;
let b = 0;
let R = [];

for (let i = 0; i < num; i++) {
  const ex = input[i + 1].split(" ");
  switch (ex[0]) {
    case "push":
      res.push(ex[1]);
      b++;
      break;
    case "pop":
      if (f === b) {
        R.push("-1");
      } else {
        R.push(res[f]);
        f++;
      }
      break;
    case "size":
      R.push(b - f);
      break;
    case "empty":
      R.push(b - f > 0 ? "0" : "1");
      break;
    case "front":
      R.push(b - f > 0 ? res[f] : "-1");
      break;
    case "back":
      R.push(b - f > 0 ? res[b - 1] : "-1");
      break;
  }
}
console.log(R.join("\n"));
