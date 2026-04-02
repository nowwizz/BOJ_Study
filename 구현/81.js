// 2149번 : 암호 해독

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
let key = input[0].split("").map((x, y) => [x, y]);
const str = input[1];
const length = str.length / key.length;

let temp1 = [];
for (let i = 0; i < str.length; i += length) {
  temp1.push(str.slice(i, i + length).split(""));
}

key.sort((a, b) => a[0].localeCompare(b[0]));

let temp2 = [];
for (let i = 0; i < key.length; i++) {
  temp2[key[i][1]] = temp1[i];
}

let result = "";
for (let i = 0; i < length; i++) {
  for (let j = 0; j < key.length; j++) {
    result += temp2[j][i];
  }
}
console.log(result);
