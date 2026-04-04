// DFS: 타겟 넘버

function solution(numbers, target) {
  var answer = 0;

  const dfs = (sum, n) => {
    if (n === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(sum + numbers[n], n + 1);
    dfs(sum - numbers[n], n + 1);
  };

  dfs(0, 0);

  return answer;
}
