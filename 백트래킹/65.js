// 6603번 : 로또

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(/\r?\n/)
  .map((x) => x.split(" ").map(Number));

let arr = [];
let result = "";
let k = 0;
let S = [];
let visited = [];

const dfs = (count) => {
  if (count === 6) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < k; i++) {
    if (!visited[i] && (arr.length === 0 || arr[arr.length - 1] < S[i])) {
      visited[i] = true;
      arr.push(S[i]);
      dfs(count + 1);

      arr.pop();
      visited = false;
    }
  }
};

for (let i = 0; i < input.length - 1; i++) {
  arr = [];
  result = "";
  k = input[i][0];
  S = input[i].slice(1);
  visited = new Array(k).fill(false);

  dfs(0);
  console.log(result);
}
