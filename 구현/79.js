// 8979번 : 올림픽

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, K] = input[0].split(" ").map(Number);
const medals = input.slice(1).map((x) => x.split(" ").map(Number));

medals.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

let num = 1;
for (let i = 0; i < N; i++) {
  if (
    i > 0 &&
    medals[i][1] === medals[i - 1][1] &&
    medals[i][2] === medals[i - 1][2] &&
    medals[i][3] === medals[i - 1][3]
  ) {
    medals[i].push(num);
  } else {
    num = i + 1;
    medals[i].push(num);
  }
}

for (let j = 0; j < N; j++) {
  if (medals[j][0] === K) {
    console.log(medals[j][4]);
    break;
  }
}
