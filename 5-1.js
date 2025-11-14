const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const num = input[0];
let res = [];

for (let i = 0; i < num; i++) {
  const ex = input[i + 1].split(" ");
  switch (ex[0]) {
    case "push":
      res.push(ex[1]);
      break;
    case "pop":
      if (res.length === 0) {
        console.log("-1");
      } else {
        console.log(res[0]);
        res = res.slice(1);
      }
      break;
    case "size":
      console.log(res.length);
      break;
    case "empty":
      if (res.length > 0) {
        console.log("0");
      } else {
        console.log("1");
      }
      break;
    case "front":
      if (res.length > 0) {
        console.log(res[0]);
      } else {
        console.log("-1");
      }
      break;
    case "back":
      if (res.length > 0) {
        console.log(res[res.length - 1]);
      } else {
        console.log("-1");
      }
      break;
  }
}
