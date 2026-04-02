// 11399번 : ATM

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const N = +input[0];
let people = input[1].split(" ").map(Number);

people.sort((a, b) => a - b);

let res = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    res += people[j];
  }
}

console.log(res);
