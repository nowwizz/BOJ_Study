const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath, "utf-8"));

let answer = "";

function solution(x, y, num) {
  if (num === 1) {
    answer += "*";
    return;
  }

  if (x % 3 === 1 && y % 3 === 1) {
    answer += " ";
  } else {
    solution(parseInt(x / 3), parseInt(y / 3), parseInt(num / 3));
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    solution(i, j, input);
  }
  answer += "\n";
}

console.log(answer);
