const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let res = 0;

r1.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let num = input[0];
  let arr = input[1].split(" ").map(Number);
  let sum = input[2];

  let visited = new Set();

  for (let i = 0; i < num; i++) {
    let target = sum - arr[i];

    if (visited.has(target)) {
      res += 1;
    }

    visited.add(arr[i]);
  }
  console.log(res);
});
