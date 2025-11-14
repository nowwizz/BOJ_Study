const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);

const arrF = [];
const arrB = [];

for (let i = 1; i <= input[0]; i++) {
  const str = input[i].split(" ");
  switch (str[0]) {
    case "push_front":
      arrF.push(str[1]);
      break;
    case "push_back":
      arrB.push(str[1]);
      break;
    case "pop_front":
      if (arrF.length > 0) {
        console.log(arrF[arrF.length - 1]);
        arrF.pop();
      } else if (arrB.length > 0) {
        console.log(arrB[0]);
        arrB.shift();
      } else {
        console.log("-1");
      }
      break;
    case "pop_back":
      if (arrB.length > 0) {
        console.log(arrB[arrB.length - 1]);
        arrB.pop();
      } else if (arrF.length > 0) {
        console.log(arrF[0]);
        arrF.shift();
      } else {
        console.log("-1");
      }
      break;
    case "size":
      console.log(arrF.length + arrB.length);
      break;
    case "empty":
      console.log(arrF.length > 0 || arrB.length > 0 ? "0" : "1");
      break;
    case "front":
      if (arrF.length > 0) {
        console.log(arrF[arrF.length - 1]);
      } else if (arrB.length > 0) {
        console.log(arrB[0]);
      } else {
        console.log("-1");
      }
      break;
    case "back":
      if (arrB.length > 0) {
        console.log(arrB[arrB.length - 1]);
      } else if (arrF.length > 0) {
        console.log(arrF[0]);
      } else {
        console.log("-1");
      }
      break;
  }
}
