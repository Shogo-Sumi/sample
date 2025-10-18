//tryでカウントの値をインクリメントし、catchの例外処理でyieldの値をリセットする。
export function* counter(){
  let count = 1;//現在の値をカウントする変数。初期値の記載はないので、初回に呼び出された時の値を1とする。
  while(true){//ジェネレーターは終了せずに動作する
    try {
      yield count++;//インクリメントした値をyieldへ設定
    } catch (e){
      if (e.message === "reset"){
        count = 0;//値をリセット
      } else {
        count--;//reset以外の文字列が入力された場合、インクリメントされたカウントを一つ減らす(reset以外の文字列が入力された場合、見かけ上カウントは変わらない)
      }
    }
  }
}

/*
const test1 = counter();

console.log(test1.next());
console.log(test1.next());
console.log(test1.next());

try {
  test1.throw(new Error("reset"));//リセット
  console.log("Counter reset");
} catch (e) {
  if (e.message !== "reset") {
    console.error("Unexpected error:", e.message); //リセット以外のエラー発生
  }
}

console.log(test1.next());
console.log(test1.next());
console.log(test1.next());

try {
  test1.throw(new Error("not reset"));//リセット
  console.log("Counter not reset");
} catch (e) {
  if (e.message !== "reset") {
    console.error("Unexpected error:", e.message); //リセット以外のエラー発生
  }
}

console.log(test1.next());
console.log(test1.next());
console.log(test1.next());
*/