// BFS: 단어 변환
function solution(begin, target, words) {
  var answer = [];
  const visited = Array(words.length).fill(false);
  const queue = [];

  queue.push([begin, 0]);

  while (queue.length > 0) {
    const [word, count] = queue.shift();

    if (target === word) {
      answer.push(count);
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i]) {
        let diff = 0;
        for (let j = 0; j < begin.length; j++) {
          if (words[i][j] !== word[j]) {
            diff++;
          }
        }
        if (diff === 1) {
          queue.push([words[i], count + 1]);
          visited[i] = true;
        }
      }
    }
  }

  return answer.length ? Math.min(...answer) : 0;
}
