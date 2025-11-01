//コールバック関数からPromise形式への変換
//例題からstatへ書き換えて行く方針
//fs.stat ファイルの情報を取得する。
//参考　https://www.gesource.jp/weblog/?p=8212

import * as fs from "node:fs";
import { promisify } from "node:util";

const stat = promisify(fs.stat);

/*
function stat(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err,stats) => {//statsを変数に追加
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);//追加したfiles変数をresolveの引数に追加
    });
  });
}
*/

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
stat("./result", { withFileTypes: false }) //カレントディレクトリ内のresultを読み込む
  .then(stats => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(stats.uid,stats.size,stats.atime,stats.mtime,stats.ctime);  //ここにファイル情報が出力される
  })
  .catch(err => console.error("エラー:", err));

//Aディレクトリ内のファイル
stat("./A/testA", { withFileTypes: false }) //カレントディレクトリ内のresultを読み込む
  .then(stats => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(stats.uid,stats.size,stats.atime,stats.mtime,stats.ctime);  //ここにファイル情報が出力される
  })
  .catch(err => console.error("エラー:", err));

//Bディレクトリ内のファイル
stat("./B/testB", { withFileTypes: false }) //カレントディレクトリ内のresultを読み込む
  .then(stats => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(stats.uid,stats.size,stats.atime,stats.mtime,stats.ctime);  //ここにファイル情報が出力される
  })
  .catch(err => console.error("エラー:", err));

//Cディレクトリ内のファイル
stat("./C/testC", { withFileTypes: false }) //カレントディレクトリ内のresultを読み込む
  .then(stats => {
    console.log("カレントディレクトリ内のファイル名:");
    console.log(stats.uid,stats.size,stats.atime,stats.mtime,stats.ctime);  //ここにファイル情報が出力される
  })
  .catch(err => console.error("エラー:", err));


