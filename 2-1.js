const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

let left = input[0].split("");
let right = [];

for (let i = 0; i < Number(input[1]); i++) {
  const [cmd, char] = input[i + 2].split(" ");

  switch (cmd) {
    case "L":
      if (left.length > 0) right.push(left.pop());
      break;
    case "D":
      if (right.length > 0) left.push(right.pop());
      break;
    case "B":
      if (left.length > 0) left.pop();
      break;
    case "P":
      left.push(char);
      break;
  }
}

console.log(left.join("") + right.reverse().join(""));
