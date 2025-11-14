const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

let first = input[0].split("").map(Number);
let second = input[1].split("").map(Number);
let third = input[2].split("").map(Number);
let fourth = input[3].split("").map(Number);
const count = +input[4];

function turn(arr, dir) {
  const ex = [];
  if (dir === 1) {
    ex.push(arr[7]);
    ex.push(arr[0]);
    ex.push(arr[1]);
    ex.push(arr[2]);
    ex.push(arr[3]);
    ex.push(arr[4]);
    ex.push(arr[5]);
    ex.push(arr[6]);
  } else {
    ex.push(arr[1]);
    ex.push(arr[2]);
    ex.push(arr[3]);
    ex.push(arr[4]);
    ex.push(arr[5]);
    ex.push(arr[6]);
    ex.push(arr[7]);
    ex.push(arr[0]);
  }
  return ex;
}

for (let i = 0; i < count; i++) {
  const [number, dir] = input[5 + i].split(" ").map(Number);

  if (number === 1) {
    if (first[2] === second[6]) {
      first = turn(first, dir);
    } else {
      first = turn(first, dir);

      if (second[2] !== third[6]) {
        if (third[2] !== fourth[6]) {
          fourth = turn(fourth, dir * -1);
        }
        third = turn(third, dir);
      }
      second = turn(second, dir * -1);
    }
  } else if (number === 2) {
    if (first[2] !== second[6]) {
      first = turn(first, dir * -1);
    }
    if (second[2] !== third[6]) {
      if (third[2] !== fourth[6]) {
        fourth = turn(fourth, dir);
      }
      third = turn(third, dir * -1);
    }
    second = turn(second, dir);
  } else if (number === 3) {
    if (second[2] !== third[6]) {
      if (second[6] !== first[2]) {
        first = turn(first, dir);
      }
      second = turn(second, dir * -1);
    }
    if (third[2] !== fourth[6]) {
      fourth = turn(fourth, dir * -1);
    }
    third = turn(third, dir);
  } else {
    if (third[2] === fourth[6]) {
      fourth = turn(fourth, dir);
    } else {
      fourth = turn(fourth, dir);

      if (second[2] !== third[6]) {
        if (first[2] !== second[6]) {
          first = turn(first, dir * -1);
        }
        second = turn(second, dir);
      }
      third = turn(third, dir * -1);
    }
  }
}

let sum = 0;

sum += first[0] === 1 ? 1 : 0;
sum += second[0] === 1 ? 2 : 0;
sum += third[0] === 1 ? 4 : 0;
sum += fourth[0] === 1 ? 8 : 0;

console.log(sum);
