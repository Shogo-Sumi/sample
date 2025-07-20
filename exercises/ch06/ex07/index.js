//p157 function mergeを参考に関数を作成する。
//Objcect.assign()の仕様
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//getOwnPropertySymbols()の使用
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
//Object.prototype.propertyIsEnumerable()について
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable


//assignの持つ引数について
//第一引数target:コピー先のオブジェクトを示す。値として新しいオブジェクトをコピー先とする{}が入力される可能性がある。コピー先がnullとなることは許容されない。
//第二引数...sources:複数の引数を取りうる。列挙された順番に第一引数へ値をコピーし、後から記載された引数によって上書きされる。
export function assign(target, ...sources) {
  //targetがnullは許容されない。コピー先は{}またはオブジェクト名
  console.log("target=",target);
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  //第一引数targetの名称を使用してobjectを作成。
  const result = Object(target);
  //console.log("targetから作成されるオブジェクトresult=",result);

  //第二引数sourceに対する処理を記載
  //sourceの中身を確認し、nullの場合は処理をスキップ
  for (const source of sources) {
    if (source == null) {
      continue;
    }

    //sourceがnull出ない場合、sourceの名称を使用してobjectを作成
    const from = Object(source);
     console.log("sorceから作成されるオブジェクトfrom=",from);

    //sourceから作成したオブジェクトfromからプロパティの名前の配列をObject.keys（）を使用して取得
    //Symbolを含むプロパティについては、Object.keys()では取得されない
    const properties = Object.keys(from);
    console.log("取得したプロパティproperties=",properties);
    for (const key of properties) {
      result[key] = from[key]; //resultオブジェクトへfromオブジェクトの値をコピーする
    }

    //プロパティにシンボルを含む場合の処理。先のObject.key()では処理されていない。
    const symbols = Object.getOwnPropertySymbols(from);//fromオブジェクトからsymbolプロパティの配列を格納。
    for (const sym of symbols) {
      if (Object.prototype.propertyIsEnumerable.call(from, sym)) {//fromオブジェクト内での直接のプロパティである場合
        result[sym] = from[sym];
      }
    }
  }

  //結果を返す。
  return result;
}
