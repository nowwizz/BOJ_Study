const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, K] = input[0].split(" ").map(Number);

const Max = 100000;
const dist = Array(Max + 1).fill(-1); //각 위치까지 도달하는 데 걸린 최소 시간
const deque = [];

deque.push(N);
dist[N] = 0; // 시작 위치 시간 = 0

while (deque.length > 0) {
  const x = deque.shift();

  // 동생 위치 도착하면 끝
  if (x === K) break;

  // 1. 순간이동 : 0초
  if (x * 2 <= Max && dist[x * 2] === -1) {
    dist[x * 2] = dist[x]; //시간 그대로
    deque.unshift(x * 2);
  }

  //2. -1 이동 : 1초
  if (x - 1 >= 0 && dist[x - 1] === -1) {
    dist[x - 1] = dist[x] + 1;
    deque.push(x - 1); //1초니까 뒤에 넣기
  }

  //3. +1 이동 : 1초
  if (x + 1 <= Max && dist[x + 1] === -1) {
    dist[x + 1] = dist[x] + 1;
    deque.push(x + 1);
  }
}

console.log(dist[K]);
