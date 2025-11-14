const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const t = Number(input[0]); //테스트 케이스 개수
let index = 1; //몇 번째 맵 정보인지
const dx = [-1, 1, 0, 0]; //상하좌우 X
const dy = [0, 0, -1, 1]; //상하좌우 Y

for (let tc = 0; tc < t; tc++) {
  //테스트 케이스 개수만큼 BFS 실행
  const [w, h] = input[index++].split(" ").map(Number); //맵의 가로, 세로 길이
  const map = []; //맵 배열
  for (let i = 0; i < h; i++) {
    //맵 배열 저장
    map.push(input[index++].split(""));
  }

  const fireTime = Array.from({ length: h }, () => Array(w).fill(-1)); //맵에서 불이 어디에 몇초에 나는지 저장 (-1은 도달하지 않음)
  const personTime = Array.from({ length: h }, () => Array(w).fill(-1)); //맵에서 상근이가 어디에 몇초에 가는지 저장 (-1은 도달하지 않음)
  const fireQ = []; //불의 좌표 저장
  const personQ = []; //사람의 좌표 저장

  for (let i = 0; i < h; i++) {
    //불과 상근이 시작 위치 저장 및 시간 0 저장
    for (let j = 0; j < w; j++) {
      if (map[i][j] === "*") {
        fireQ.push([i, j]);
        fireTime[i][j] = 0;
      }
      if (map[i][j] === "@") {
        personQ.push([i, j]);
        personTime[i][j] = 0;
      }
    }
  }

  let fHead = 0; //fireQ 순서
  while (fHead < fireQ.length) {
    //fireQ 전체 순회
    const [x, y] = fireQ[fHead++]; //순서대로 fireQ 사용

    for (let d = 0; d < 4; d++) {
      //상하좌우 순회
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        //이동 좌표가 맵 범위를 벗어나지 않았다면
        if (map[nx][ny] !== "#" && fireTime[nx][ny] === -1) {
          //이동 좌표가 벽이 아니고 불이 퍼지지 않았을 때
          fireTime[nx][ny] = fireTime[x][y] + 1; //현재 좌표의 불시간 + 1을 이동 좌표에 저장
          fireQ.push([nx, ny]); //불을 저장한 Q에 이동 좌표 추가
        }
      }
    }
  }

  let escaped = false; //탈출 여부
  let pHead = 0; //personQ 순서
  while (pHead < personQ.length) {
    //personQ 전체 순회
    const [x, y] = personQ[pHead++]; //순서대로 personQ 사용

    if (x === 0 || x === h - 1 || y === 0 || y === w - 1) {
      //상근이가 맵 끝에 닿았다면
      console.log(personTime[x][y] + 1); //현재 상근이가 이동한 시간 + 1
      escaped = true; //탈출 성공
      break; //끝
    }

    for (let d = 0; d < 4; d++) {
      //상하좌우 순회
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        //상근이가 맵 범위를 벗어나지 않았다면
        if (map[nx][ny] === "#" || personTime[nx][ny] !== -1) continue; //이동 좌표가 벽이거나 시간이 -1이 아니면 다음 방향 이동
        const nextTime = personTime[x][y] + 1; //다음 이동 시 시간

        if (fireTime[nx][ny] === -1 || fireTime[nx][ny] > nextTime) {
          //이동 좌표의 불이 없고, 불이 퍼지는 시간보다 이동 시간이 더 빠를 때
          personTime[nx][ny] = nextTime; //이동좌표의 시간은 nextTime
          personQ.push([nx, ny]); //이동 좌표를 personQ에 저장
        }
      }
    }
  }

  if (!escaped) console.log("IMPOSSIBLE"); //탈출 못했으면 IMPOSSIBLE
}
