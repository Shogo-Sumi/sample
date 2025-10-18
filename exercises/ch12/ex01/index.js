
//conterIterは試行回数の最大値maxを引数に受け取る”関数” イテレータ
function counterIter(max) {
  console.log("counterIter");//関数に入った場合に最初に表示される処理
  let c = 1;//回数確認用？の変数c
  return {
    [Symbol.iterator]() {//イテレーターオブジェクトを返す処理
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {//next()が呼び出された時の処理
      console.log("counterIter: next");
      if (c >= max + 1) {//試行回数が最大値+1の値よりも大きい場合、doneはtrueを返す。
        return { value: undefined, done: true };
      }
      const value = c;//定数にcの値を格納
      c++;//cを1つ増加
      //console.log(c);//cの値確認用追加ソースコード。
      //console.log(value);//valuの値確認用追加ソースコード。
      return { value, done: false };//c<max+1の場合doneはfalseを返す。
    },
    return(value) {//returnメソッドは現在のvalueを返す
      console.log("counterIter: return:", value);
      return { value, done: true };//この場合、doneはtrueを返す
    },
    throw(e) {//throwメソッドは例外を返す。
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {//counterGenはジェネレーター
  console.log("counterGen");
  try {//try処理
    for (let c = 1; c <= max; c++) {//cの値がmax以下である場合、ログを表示し、yieldへcの値を代入？
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {//catch処理、エラーの表示
    console.log("counterGen: catch:", e);
    throw e;
  } finally {//finally処理。最終的なログを表示
    console.log("counterGen: finally");
  }
}

//調査対象の操作

//明示的にイテレータプロトコルの next() を呼び出す
//let test1 = counterIter(3);
//console.log(test1.next());
//console.log(test1.next());
//console.log(test1.next());
//console.log(test1.next());

//明示的にイテレータプロトコルの return() を呼び出す
//let test2 = counterIter(3);
//console.log(test2.return(3));
//console.log(test2.return(2));
//console.log(test2.return(1));
//console.log(test2.return(0));

//明示的にイテレータプロトコルの throw() を呼び出す
/*
let test3 = counterIter(3);
try{
  test3.throw(new Error("Test3"));
} catch(e){
  console.log("Error Massage:",e.message);
}
*/
//for-of ループを実行
/*
let test4 = counterGen(3);
for(const value of test4){
  console.log(value);
}
*/

//for-of ループを実行途中で break
/*
let test5 = counterGen(3);
for(const value of test5){
  console.log(value);
  if (value === 2){
    break;
  }
}
*/

//for-of ループを実行中に例外発生
let test6 = counterGen(3);
try{
  for(const value of test6){
    console.log(value);
    if (value === 2){
      throw new Error("Test6")
    }
  }
} catch (e) {
    console.log(e.message);
  }
