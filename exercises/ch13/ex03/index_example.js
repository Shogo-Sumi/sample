//コールバック関数からPromise形式への変換
import * as fs from "node:fs";

function mkdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// ディレクトリ A → B → C を順に作る以下のコード (※ エラーハンドリングは省略) を...
/*
fs.mkdir("A", () => {
  fs.mkdir("B", () => {
    fs.mkdir("C", () => console.log("COMPLETED"));
  });
});
*/

// 以下のように書くことができる
//Promiseチェーンでの記載
mkdir("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"));