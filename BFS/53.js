// 2178번 : 미로 탐색

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1, N + 1).map((x) => x.split("").map(Number));
let visited = Array.from({ length: N }, () => Array(M).fill(false));

const dn = [-1, 1, 0, 0];
const dm = [0, 0, -1, 1];

const queue = [[0, 0, 1]];
visited[0][0] = true;

while (queue.length) {
  const [n, m, d] = queue.shift();

  if (n === N - 1 && m === M - 1) {
    console.log(d);
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nn = n + dn[i];
    const nm = m + dm[i];

    if (nn < 0 || nn >= N || nm < 0 || nm >= M) continue;

    if (map[nn][nm] === 1 && visited[nn][nm] === false) {
      visited[nn][nm] = true;
      queue.push([nn, nm, d + 1]);
    }
  }
}
