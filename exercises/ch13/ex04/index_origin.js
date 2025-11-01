//動作確認のため、例題を実行する。
//import記載

import * as fs from "node:fs";
import { join } from "node:path";

//fetchFirstFileSizeについて
//pathとcallbackを引数に持つ

function fetchFirstFileSize(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }
    //fileの長さが0の場合、nullを返す。
    if (files.length === 0) {
      callback(null, null);
      return;
    }

    //fileの長さが0以外の場合
    //pathとファイル名をjoin。配列のfiles[0]を文字列に変換。
    fs.stat(join(path, files[0]), (err, stats) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, stats.size);//エラーじゃなければファイルサイズを返す。
    });
  });
}


//fetchSumOfFileSizesについて
//pathとcallbackを引数に持つ
function fetchSumOfFileSizes(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    //エラーじゃなければ、total=0,restにfilesの配列を格納
    let total = 0;
    const rest = [...files];

    function iter() {
      if (rest.length === 0) {//配列の長さが0ならばエラー
        callback(null, total);
        return;
      }

      const next = rest.pop();//nextにrestの値をポップ
      fs.stat(join(path, next), (err, stats) => {
        if (err) {
          callback(err);
          return;
        }
        total += stats.size;//ファイルサイズのトータルを計算
        iter();
      });
    }
    iter();
  });
}

//動作確認
 //ディレクトリexample内のファイル
const targetDir = "./example";

console.log("読み込み中:", targetDir);
console.log("---");

fetchFirstFileSize(targetDir, (err, size) => {
  if (err) {
    console.error("最初のファイル取得エラー:", err.message);
    return;
  }
  if (size === null) {
    console.log("最初のファイル: なし（ディレクトリが空）");
  } else {
    console.log(`最初のファイルのサイズ: ${size} bytes`);
  }
});

fetchSumOfFileSizes(targetDir, (err, total) => {
  if (err) {
    console.error("合計サイズ取得エラー:", err.message);
    return;
  }
  console.log(`全ファイルの合計サイズ: ${total} bytes`);
});