const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const N = +input[0];
const eggs = input.slice(1).map((line) => line.split(" ").map(Number));

let maxBroken = 0;

function dfs(idx) {
  //다 돌았으면 깨진 개수 세기
  if (idx === N) {
    const broken = eggs.filter(([s, _]) => s <= 0).length;
    maxBroken = Math.max(maxBroken, broken);
    return;
  }

  //현재 계란이 이미 깨졌으면 다음 계란으로
  if (eggs[idx][0] <= 0) {
    dfs(idx + 1);
    return;
  }

  let allBroken = true;

  //다른 계란들과 부닺히기
  for (let i = 0; i < N; i++) {
    if (i === idx || eggs[i][0] <= 0) continue;

    allBroken = false;

    eggs[idx][0] -= eggs[i][1];
    eggs[i][0] -= eggs[idx][1];

    dfs(idx + 1);

    //백트래킹 (원상복구)
    eggs[idx][0] += eggs[i][1];
    eggs[i][0] += eggs[idx][1];
  }

  //부딪힐 계란이 없으면 그냥 다음 계란으로
  if (allBroken) dfs(idx + 1);
}

dfs(0);
console.log(maxBroken);
