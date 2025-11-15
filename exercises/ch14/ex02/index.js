//Arrayのような組み込みクラスに対して、堅牢なサブクラスを作る方法はなかった。
//ES6でclassとextedsキーワードで可能になった。
//P427参照

//MyArrayLikeはArrayを継承していない、配列のようなクラス
export class MyArrayLike {
  // TODO
  //constructorを定義
  //受け取った要素を配列して扱う
  constructor(items) {
    // 引数が undefined または数値（length）でも対応
    if (items == null) {//引数が定義されていない場合
      this.length = 0;
    } else if (typeof items === 'number') {//要素が数値の場合、テストケース合わせて追加
      this.length = items;
    } else {
      //要素が配列の場合
      const arr = Array.from(items);
      this.length = arr.length;
      for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
      }
      return;
    }
  }

  //イテレータの定義
  [Symbol.iterator](){//「配列のようなクラスである必要があるため、イテレーターを使用。for文等を使用するため。
    let index = 0;
    const self = this;
    return{
      next(){
        if(index < self.length){//現在の配列の要素i<配列の要素の長さ
          return {value: self[index++],done: false};//要素数をインクリメント。条件に合う間は繰り返す。
        }
        return {done: true};
      }
    };
  }

    toString() {
    return Array.from(this).join(",");//配列の各要素を,で分割
  }
}


//Myarrayはarrayを継承している。
export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  // TODO
  static get [Symbol.species](){//extendを使用してサブクラスを作成するとき、Arrayのサブクラスのコンストラクタは、すべてSymbol.speciesという名前の継承プロパティを持つ
    return MyArrayLike;//Symbole.speciesは独自プロパティを定義可能。MyArrayLikeをクラスとしてreturn。
  }
}
