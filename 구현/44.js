// 1924번 : 2007년

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();
const [month, day] = input.split(" ");

const mDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

let mRes = month - 1;
let dRes = day - 1;

let res =
  (mRes !== 0 ? mDays.slice(0, mRes).reduce((acc, cur) => acc + cur, 0) : 0) +
  dRes;

console.log(days[res % 7]);
