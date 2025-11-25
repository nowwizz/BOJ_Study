// 10814번 : 나이순 정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const arr = input.slice(1).map((line) => line.split(" "));

arr.sort((a, b) => a[0] - b[0]);

console.log(arr.join("\n").split(",").join(" "));
