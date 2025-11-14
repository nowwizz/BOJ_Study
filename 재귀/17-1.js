const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// N: 지도의 크기 2^N, M: 길 잃은 철학자의 걸음 수..
const [RN, M] = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(" ")
  .map(Number);

const N = Math.log2(RN);

// 1부터 시작하는 좌표 (x, y)를 반환하는 함수
function solve(n, m) {
  // 1. 기저 조건 (Base Case) : N = 1, 2 X 2 지도
  if (n === 1) {
    if (m === 1) return { x: 1, y: 1 }; //(1, 1)
    if (m === 2) return { x: 1, y: 2 }; //(1, 2)
    if (m === 3) return { x: 2, y: 2 }; //(2, 2)
    if (m === 4) return { x: 2, y: 1 }; //(2, 1)
  }

  // 2. 재귀 단계
  const half = 1 << (n - 1); //2^(n-1), 다음 단계 지도의 한 변 길이
  const S = half * half; //각 사분면의 칸 수

  let result;

  //M이 속하는 사분면 판단
  if (m <= S) {
    //1사분면 (Left Bottom)
    //M을 그대로 넘겨 재귀 호출
    const subResult = solve(n - 1, m);

    //좌표 변환: (x', y') 형태 (90도 시계 방향 회전 & 수직 대칭);
    //(x', y') => (y', x');
    result = { x: subResult.y, y: subResult.x };
  } else if (m <= 2 * S) {
    //2사분면 (Left Top)
    //M' = M - S로 변환하여 재귀 호출
    const subResult = solve(n - 1, m - S);

    //좌표 변환: x는 그대로, y에 half 더하기 (단순 이동)
    //(x', y') => (x', y' + half);
    result = { x: subResult.x, y: subResult.y + half };
  } else if (m <= 3 * S) {
    //3사분면 (Right Top: RT)
    //M' = M-2S로 변환하여 재귀 호출
    const subResult = solve(n - 1, m - 2 * S);

    //좌표 변환: x와 y 모두 half 더하기 (단순 이동)
    //(x', y') => (x' + half, y' +half);
    result = { x: subResult.x + half, y: subResult.y + half };
  } else {
    //4사분면 (Right Bottom)
    //M' = M - 3S로 변환하여 재귀 호출
    const subResult = solve(n - 1, m - 3 * S);

    //좌표 변환: (2 * half - y' + 1, half - x'+ 1) (90도 반시계 방향 회전 & 수평 대칭)
    //(x', y') => (2 * half - y' + 1, half - x' + 1)
    result = {
      x: 2 * half - subResult.y + 1,
      y: half - subResult.x + 1,
    };
  }
  return result;
}

const finalCoord = solve(N, M);

console.log(finalCoord.x, finalCoord.y);
