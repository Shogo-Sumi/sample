import * as fs from 'fs';//ファイルを扱うモジュールのインポート
import * as path from 'path';//パス操作のモジュールのインポート
//pathとfsモジュールについて
//https://www.wakuwakubank.com/posts/663-nodejs-fs-path/

function* walk(rootPath) {
  //絶対パスの取得
  //resolve(rootPath)は引数rootPathに格納された、ファイル、フォルダの絶対パスを返す。
  //https://k-koh.hatenablog.com/entry/2020/07/05/132343
  const absolutePath = path.resolve(rootPath);
  
  //パスの存在確認
  //https://nodejs.org/api/fs.html#fsfstatsyncfd-options
  const stats = fs.statSync(absolutePath);
  
  // オブジェクトを生成
  yield {
    path: absolutePath,
    isDirectory: stats.isDirectory()//pathがディレクトリか判断。
  };
  
  // ディレクトリの場合、内容を再帰的に探索
  if (stats.isDirectory()) {//ディレクトリの場合
    const items = fs.readdirSync(absolutePath);//指定された絶対パスのディレクトリ内のエントリの名前を配列として取得
    for (const item of items) {//配列を探索
      const itemPath = path.join(absolutePath, item);//絶対パスにアイテムに格納されたエントリを追加
      //シンボリックリンクの場合は虫。
      if (!fs.lstatSync(itemPath).isSymbolicLink()) {
        yield* walk(itemPath);
      }
    }
  }
}


//test
(async () => {
  for await (const elem of walk(".")) {
    console.log(elem);
  }
})();