// BFS: 게임 맵 최단거리
function solution(maps) {
  var answer = 0;
  const queue = [[0, 0]];
  const N = maps.length;
  const M = maps[0].length;
  let map = Array.from({ length: N }, () => Array(M).fill(0));
  const dn = [-1, 1, 0, 0];
  const dm = [0, 0, -1, 1];

  map[0][0] = 1;

  while (queue.length > 0) {
    let [n, m] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nn = n + dn[i];
      const nm = m + dm[i];

      if (nn >= 0 && nn < N && nm >= 0 && nm < M) {
        if (maps[nn][nm] === 1 && map[nn][nm] === 0) {
          map[nn][nm] = map[n][m] + 1;
          queue.push([nn, nm]);
        }
      }
    }
  }

  answer = map[N - 1][M - 1] === 0 ? -1 : map[N - 1][M - 1];

  return answer;
}
