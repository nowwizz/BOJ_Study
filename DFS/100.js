// DFS: 네트워크

function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  const dfs = (x) => {
    visited[x] = true;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && computers[x][i] === 1) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
