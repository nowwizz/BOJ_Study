const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

let output = [];
let result = "";

function solution(count) {
  if (count === M) {
    result += output.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    output.push(i);

    solution(count + 1);

    output.pop();
  }
}

solution(0);

console.log(result);
