import { opendir } from "node:fs/promises";
import { resolve, join } from "node:path";

async function* walk(rootPath) {
  const abs = resolve(rootPath);//絶対パスを取得

  let dir;//ディレクトリ格納用変数
  try {
    dir = await opendir(abs, { withFileTypes: true });//絶対パスの情報を取得
  } catch {
    return; //存在しないパスは無視
  }

  for await (const entry of dir) {
    if (entry.isSymbolicLink()) continue;//シンボリックリンクの場合は継続

    const fullPath = join(abs, entry.name);//絶対パス＋ファイル名をフルパスとして取得
    const isDirectory = entry.isDirectory();//ディレクトリかどうかを判断

    yield { path: fullPath, isDirectory };//フルパスとディレクトリかどうかを格納

    if (isDirectory) {//ディレクトリの場合再帰的に実行
      yield* walk(fullPath);
    }
  }
}


//test
(async () => {
  for await (const elem of walk(".")) {
    console.log(elem);
  }
})();