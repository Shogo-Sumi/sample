function equals(o1, o2) {
  // 厳密等価なら true
  if (o1 === o2) {
    return true;
  }

  // 厳密等価ではない場合オブジェクト以外が指定されれば false
  if (o1 === null || o2 === null || typeof o1 !== 'object' || typeof o2 !== 'object') {
    return false;
  }

  // objectのプロパティを配列として取得、定数へ格納
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  //console.log(keys1,keys2);
  //配列の長さを比較して、異なっていればfalseを返す。
  if (keys1.length !== keys2.length) {
            //console.log("flag3");
     return false;
  }


  //console.log(keys1.length,keys2.length)
  // プロパティを並べかえ、ソートし定数に代入する。
  const sortedKeys1 = keys1.sort();
  const sortedKeys2 = keys2.sort();
  //console.log(sortedKeys1,sortedKeys2);
  //各プロパティを比較
  for (let i = 0; i < sortedKeys1.length; i++) {
    if (sortedKeys1[i] !== sortedKeys2[i]) {
            //console.log("flag4");
      return false;
    }
  }

  // プロパティの値を再帰的に比較する
  for (const key of keys1) {
    if (!equals(o1[key], o2[key])) {
            //console.log("flag5");
      return false;
    }
  }

  return true;
}

//console.log(equals(42,42));
//console.log(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}}));

