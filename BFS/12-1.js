const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const t = input[0];
// 순서대로 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let num = 1;

for (let k = 0; k < t; k++) {
  const [n, m, bug] = input[num].split(" ").map(Number);
  const bugMap = Array.from({ length: n }, () => Array(m).fill(0));
  const visited = Array.from({ length: n }, () => Array(m).fill(false)); //n개의 행, m개의 열의 방문 여부 배열 생성

  for (let d = 1; d <= bug; d++) {
    const [x, y] = input[num + d].split(" ").map(Number);
    bugMap[x][y] = 1;
  }

  let count = 0; //배추흰지렁이 마리수

  for (let i = 0; i < n; i++) {
    //맵 순회
    for (let j = 0; j < m; j++) {
      if (bugMap[i][j] === 1 && !visited[i][j]) {
        //현재좌표가 1이고 방문하지 않았을 때
        count++; //지렁이 추가
        let queue = [[i, j]]; //큐에 현재 좌표 저장
        visited[i][j] = true; //현재 좌표 방문

        while (queue.length) {
          //상, 하, 좌, 우 이동했는데 1인 좌표들이 있을 때까지
          const [cx, cy] = queue.shift(); //좌표 꺼내서

          for (let c = 0; c < 4; c++) {
            const nx = cx + dx[c]; //상, 하, 좌, 우 이동
            const ny = cy + dy[c];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
              //좌표들이 맵 끝에 닿지 않았을 때
              if (bugMap[nx][ny] === 1 && !visited[nx][ny]) {
                //이동한 좌표가 1이고 방문하지 않았을 때
                visited[nx][ny] = true; //이동한 좌표 방문
                queue.push([nx, ny]); //이동한 좌표 큐에 push
              }
            }
          }
        }
      }
    }
  }
  num += bug + 1;
  console.log(count);
}
