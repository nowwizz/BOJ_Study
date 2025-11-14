const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [N, L] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

let res = "";
const deque = []; //인덱스 저장
let start = 0;

for (let i = 0; i < N; i++) {
  const now = num[i]; //현재 값

  //덱 안에 뭐가 있고, 덱의 마지막 수가 현재수보다 크면 마지막 수 pop()
  while (deque.length > start && num[deque[deque.length - 1]] > now)
    deque.pop();

  //현재수 인덱스 덱에 저장
  deque.push(i);

  //덱의 첫 번째 인덱스가 윈도우에서 벗어났다면 제거
  while (deque.length > start && deque[start] <= i - L) {
    start++;
  }

  //결과에 덱의 첫 번째 인덱스의 수 기록
  res += num[deque[start]] + " ";

  //메모리초과 방지: 10000개씩 끊어 출력
  if (i % 10000 === 0) {
    process.stdout.write(res);
    res = "";
  }
}
process.stdout.write(res);
