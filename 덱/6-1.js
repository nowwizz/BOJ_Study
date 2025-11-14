const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

let p = 1;

while (p * 2 <= input) p *= 2;

console.log(p == input ? p : (input - p) * 2);
