// 1966번 : 프린터 큐

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const T = +input[0];

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 2 + 1].split(" ").map(Number);
  let arr = input[i * 2 + 2].split(" ").map(Number);
  let arrN = input[i * 2 + 2].split(" ").map((x, y) => [Number(x), y]);
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === Math.max(...arr.slice(j))) {
      count++;
      if (arrN[j][1] === M) {
        console.log(count);
        break;
      }
    } else {
      arr.push(arr[j]);
      arrN.push(arrN[j]);
    }
  }
}
