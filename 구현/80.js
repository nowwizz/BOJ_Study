// 14584번 : 암호 해독

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim().split(/\r?\n/);
const str = input[0];
const N = +input[1];
const words = input.slice(2);

let count = 1;
while (1) {
  let ex = "";
  for (let i = 0; i < str.length; i++) {
    ex += String.fromCharCode(
      str[i].charCodeAt(0) + count > 122
        ? str[i].charCodeAt(0) + count - 26
        : str[i].charCodeAt(0) + count,
    );
  }

  for (let j = 0; j < N; j++) {
    if (ex.includes(words[j])) {
      console.log(ex);
      return;
    }
  }
  count++;
}
