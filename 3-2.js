const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const goal = [];
const resS = [];
const resA = [];
const prog = [];
let num = 1;
let j = 0;

for (let i = 0; i < Number(input[0]); i++) {
  goal.push(Number(input[i + 1]));
}

while (j < goal.length) {
  //배열은 참조가 다르기 때문에 항상 달라 goal !== resA는 항상 true
  if (num <= goal[j]) {
    resS.push(num);
    prog.push("+");
    num++;
  } else if (resS[resS.length - 1] === goal[j]) {
    resA.push(resS.pop());
    prog.push("-");
    j++;
  } else {
    console.log("NO");
    process.exit(0);
  }
}

for (let f = 0; f < prog.length; f++) {
  console.log(prog[f]);
}
