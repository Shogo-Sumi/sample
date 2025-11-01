import * as fs from "node:fs";
import { join } from "node:path";
import { readdir, stat } from "node:fs/promises";

//fetchFirstFileSize

//エラー処理はcallbackではなく、try-catchで処理
async function fetchFirstFileSize(path) {
  try {
    const files = await readdir(path);//非同期でreaddirを使用してファイル一覧を取得
    if (files.length === 0) {//サイズが空の場合、nullを返す。
      return null;
    }

    const stats = await stat(join(path, files[0]));//非同期でstatを使用してファイルのパスと名前をjoinで結合
    return stats.size;//ファイルサイズを返す。
  } catch (err) {
    throw err;  //エラーが発生した場合はthrowで返す
  }
}


//fetchSumOfFileSizes

//エラー処理はcallbackではなく、try-catchで処理
async function fetchSumOfFileSizes(path) {
  try {
    const files = await readdir(path);//非同期でreaddirを使用してファイル一覧を取得
    let total = 0;//filesizeの合計を格納

    for (const file of files) {
      const stats = await stat(join(path, file));//pathとファイル名をjoinで結合
      total += stats.size;//fileサイズの合計
    }

    return total;
  } catch (err) {
    throw err;
  }
}

//テスト
//テスト対処はexampleディレクトリ配下の2つのファイル。
fetchFirstFileSize("./example")
  .then(size => {
    console.log("最初のファイルのサイズ:", size);
    return fetchSumOfFileSizes("./example");
  })
  .then(total => {
    console.log("合計サイズ:", total);
  })
  .catch(err => console.error("エラー:", err));