const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let res = 0;

r1.question("", (num) => {
  for (let i = 0; i < 9; i++) {
    let tmp = 0;
    for (let j = 0; j < num.length; j++) {
      if (i === 6) {
        if (num[j] == 6 || num[j] == 9) {
          tmp += 0.5;
        }
      } else {
        if (num[j] == i) tmp += 1;
      }
    }
    if (Math.ceil(tmp) > res) res = Math.ceil(tmp);
  }
  console.log(res);
  r1.close();
});
