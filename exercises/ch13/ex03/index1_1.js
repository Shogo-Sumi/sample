//コールバック関数からPromise形式への変換
//例題からreaddirへ書き換えて行く方針
//fs.readdir ファイル一覧を取得する。
//参考　https://qiita.com/shisama/items/affb219514eb1166198e

import * as fs from "node:fs";

function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err,files) => {//filesを変数に追加
      if (err) {
        reject(err);
        return;
      }
      resolve(files);//追加したfiles変数をresolveの引数に追加
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

//テスト
//カレントディレクトリ
readdir(".", { withFileTypes: false }) //カレントディレクトリを読み込む
  .then(files => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(files);  //ここにファイル名の配列が出力される
  })
  .catch(err => console.error("エラー:", err));

  //ディレクトリA内のファイル
  readdir("./A", { withFileTypes: false }) //カレントディレクトリを読み込む
  .then(files => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(files);  //ここにファイル名の配列が出力される
  })
  .catch(err => console.error("エラー:", err));

  //ディレクトリA内のファイル
  readdir("./B", { withFileTypes: false }) //カレントディレクトリを読み込む
  .then(files => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(files);  //ここにファイル名の配列が出力される
  })
  .catch(err => console.error("エラー:", err));

  //ディレクトリC内のファイル
  readdir("./C", { withFileTypes: false }) //カレントディレクトリを読み込む
  .then(files => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(files);  //ここにファイル名の配列が出力される
  })
  .catch(err => console.error("エラー:", err));

