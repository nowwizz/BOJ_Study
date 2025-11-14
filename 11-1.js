const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const [n, m] = input[0].split(" ").map(Number);
const paper = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false)); //n개의 행, m개의 열의 방문 여부 배열 생성

// 순서대로 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  let queue = [[x, y]]; //큐에 현재 좌표 저장
  visited[x][y] = true; //현재 좌표 방문
  let area = 1; //현재 그림 넓이

  while (queue.length) {
    //상, 하, 좌, 우 이동했는데 1인 좌표들이 있을 때까지
    const [cx, cy] = queue.shift(); //좌표 꺼내서

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i]; //상, 하, 좌, 우 이동
      const ny = cy + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        //좌표들이 그림 끝에 닿지 않았을 때
        if (paper[nx][ny] === 1 && !visited[nx][ny]) {
          //이동한 좌표가 1이고 방문하지 않았을 때
          visited[nx][ny] = true; //이동한 좌표 방문
          queue.push([nx, ny]); //이동한 좌표 큐에 push
          area++; //넓이 증가
        }
      }
    }
  }
  return area; //넓이 반환
}

let count = 0; //그림 개수
let maxArea = 0; //최대 넓이

for (let i = 0; i < n; i++) {
  //도화지 순회
  for (let j = 0; j < m; j++) {
    if (paper[i][j] === 1 && !visited[i][j]) {
      //현재좌표가 1이고 방문하지 않았을 때
      count++; //그림 개수 추가
      const area = bfs(i, j); //그림 넓이 구하는 함수 실행
      if (area > maxArea) maxArea = area; // 최대 넓이 저장
    }
  }
}

console.log(count);
console.log(maxArea);
