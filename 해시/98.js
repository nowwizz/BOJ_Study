// 해시: 베스트앨범

function solution(genres, plays) {
  var answer = [];
  let map = new Map();
  let arr = [];

  for (let i = 0; i < genres.length; i++) {
    map.set(genres[i], (map.get(genres[i]) || 0) + plays[i]);
    arr.push([i, genres[i], plays[i]]);
  }

  arr.sort((a, b) => {
    if (a[1] !== b[1]) return map.get(b[1]) - map.get(a[1]);
    else {
      if (a[2] !== b[2]) return b[2] - a[2];
      else return a[0] - b[0];
    }
  });

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i][1] !== arr[i - 1][1]) {
      answer.push(arr[i][0]);
      count = 1;
    } else {
      if (count < 2) {
        answer.push(arr[i][0]);
        count++;
      }
    }
  }

  return answer;
}
