import * as fs from "node:fs";
import { join } from "node:path";
import { readdir, stat } from "node:fs/promises";

//fetchFirstFileSize

//エラー処理はcallbackではなく、try-catchで処理
/*
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
*/

//fetchSumOfFileSizes

//エラー処理はcallbackではなく、try-catchで処理
async function fetchSumOfFileSizes(path) {

    const files = await readdir(path);//非同期でreaddirを使用してファイル一覧を取得

    const statPromises = files.map(async (file) => {//配列の各要素に対して非同期処理を実行
    const fullPath = join(path, file);//path+file名でフルパスを格納
    const stats = await stat(fullPath);//フルパスに対して、ファイル情報を取得

    //
    return stats.isFile() ? stats.size : 0;//ファイルかどうかを判定し、ファイルであればファイルサイズを、ファイル以外であれば0を返す。
  });

  const sizes = await Promise.all(statPromises);//Promise.allでstatsが完了するまで待機
  return sizes.reduce((sum, size) => sum + size, 0);//ファイルサイズの合計を返す。

}

//テスト
//テスト対処はexampleディレクトリ配下の2つのファイル。

(async () => {
  try {
    const total = await fetchSumOfFileSizes('./example');
    console.log('合計サイズ:', total, 'bytes');
  } catch (err) {
    console.error('エラー:', err);
  }
})();