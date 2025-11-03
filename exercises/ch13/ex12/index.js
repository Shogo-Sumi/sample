//1秒後に文字列を表示
setTimeout(() => console.log("Hello, world!"), 1000);


//
async function longA() {
  let count = 0;
  while (true) {
    if ((++count % 1000) === 0) { console.log("A"); }//1000で割った余りが0になる場合、文字列を表示
    await Promise.resolve({})
  }
}

async function longB() {
  let count = 0;
  while (true) {
    if ((++count % 1000) === 0) { console.log("B"); }
    await Promise.resolve({})
  }
}

longA();
longB();