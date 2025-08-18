//元のソースコード
/*
withResource(new Resource(), resource => {
  resource.doA();
  resource.doB():
}); // 終了時に resource.close が自動で呼ばれる
*/

//変更後ソースコード
//finallyにcloseメソッドを記載することで、絶対にclose処理が行われると考える。
//テストの記載から、オブジェクトを引数として受け取る。

export function withResource(resource) {
    try {
        resource.doA();
        resource.doB();
    } finally {
        resource.close();
    }
}; // 終了時に resource.close が自動で呼ばれる