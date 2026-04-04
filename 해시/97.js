// 해시: 의상

function solution(clothes) {
  var answer = 1;
  let map = new Map();

  for (let [name, category] of clothes) {
    map.set(category, (map.get(category) || 0) + 1);
  }

  for (let [category, count] of map) {
    answer *= count + 1;
  }

  return answer - 1;
}
