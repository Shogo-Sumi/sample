//テンプレートオブジェクトに存在しないプロパティをあるオブジェクトから削除する。
//Setオブジェクトについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set
//forEach()を使用しての配列に対する処理
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//テンプレートオブジェクトに存在しないプロパティをあるオブジェクトから削除する

export function restrict(target, template) {
  //targetオブジェクトとtempleteオブジェクトからObject.keysを使用して配列として取得
  const targetArray = Object.keys(target);
  const templateArray = Object.keys(template);

  // テンプレートに存在しないプロパティをターゲットから削除
  for (const element of targetArray) {
    if (!templateArray.includes(element)) {
      //elementの要素がtemplateArrayに含まれない場合
      delete target[element]; //targetから削除する
    }
  }

  return target;
}

//あるオブジェクトのプロパティを別のオブジェクトから削除する。
//Symbolと継承プロパティは無視する。

export function substract(target, ...sources) {
  //targetオブジェクトからObject.keysを使用して配列として取得
  const targetArray = Object.keys(target);

  //
  const sourcesDelete = new Set(); //sourcesオブジェクトから削除対象となる要素の格納先となるオブジェクトを作成
  for (const element of sources) {
    Object.keys(element).forEach((prop) => sourcesDelete.add(prop)); //削除対象とする配列をsourcesDeleteへ格納する。
  }

  //targetArrayからsourcesDeleteに格納された削除対象を削除
  for (const element of targetArray) {
    if (sourcesDelete.has(element)) {
      delete target[element];
    }
  }

  return target;
}
