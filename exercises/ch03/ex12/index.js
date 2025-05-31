class Example {
  constructor() {
    this.number = 0; // コンストラクターの初期化
  }

  valueOf() {
    // 数値を返すメソッド
    return this.number;
  }

  toString() {
    // 文字列を返すメソッド
    return `${this.number}`;
  }
}

// インスタンスの作成
let a = new Example();

// 数値の場合
console.log(a+1); 

// 文字列の場合
console.log(`${a}`); 


