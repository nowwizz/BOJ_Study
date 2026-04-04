// 해시: 폰켓몬

function solution(nums) {
  var answer = 0;

  let set = new Set(nums);

  if (nums.length / 2 <= set.size) {
    answer = nums.length / 2;
  } else {
    answer = set.size;
  }

  return answer;
}
