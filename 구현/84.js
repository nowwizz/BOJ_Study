// 2798번 : 블랙잭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

const res = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      for (let k = 0; k < N; k++) {
        if (i !== k && j !== k) {
          if (cards[i] + cards[j] + cards[k] <= M)
            res.push(cards[i] + cards[j] + cards[k]);
        }
      }
    }
  }
}
console.log(Math.max(...res));
