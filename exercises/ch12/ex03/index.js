function* Counter(){
  try {//try処理
    let c = 0;
      c++;
      yield c;
      console.log(y1.value);
  } catch (e) {//catch処理、エラーの表示
    console.log("counterGen: catch:", e);
    throw e;
  } finally {//finally処理。最終的なログを表示
    console.log("counterGen: finally");
  }
}

let test1 = Counter();
test1.next();
test1.next();
test1.next();
