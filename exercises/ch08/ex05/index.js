//可変長引数を受け取り、以下の仕様でオブジェクトを返却する関数 sequenceToObject(...values)を作成しなさい。

export function sequenceToObject(...values){
  try {
    //引数が0の場合の処理は問題文に記載されていない。入力を促すエラーメッセージを表示する。
    if(values.length === 0){
      throw new Error("Number of pieces is nothing")
    }

    //値の個数の合計が偶数でない場合は例外を発生させる。
    if(values.length % 2 !== 0){
      throw new Error("Number of pieces is must be even number")
    }
    const result = new Object();
    //奇数番目のパラメーターを一時的に格納するための引数
    let Odd = "string"
    //何番目の引数かを格納するための引数
    let count = 1;
    for(let element of values){
      //奇数番目の引数が文字列ではない場合、例外を発生させる。
      if(count % 2 !== 0){
        if(typeof element !== "string"){
          throw new Error("Odd number parameter must be string")
        }
        //奇数の引数の値を格納
        Odd = element;
        //console.log("if",Odd);
        count++;
      } else {
        //propertyに格納されたプロパティ名に値を格納
        result[Odd] = element;//変数をプロパティ名に使用するため、ドット記法は使えない。
        count++;
        //console.log("else",Odd);
      }
    }
    return result;
  } catch(e) {
    return e.message;
    //console.log( e.message );
  }
}

sequenceToObject("a");