//instance of について
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/instanceof
//プロトタイプの参照方法
//https://qiita.com/yassh/items/30db59e58092988f1c56

export function instanceOf(object, constructor) {
  // null や undefined の場合、false を返す
  if (object == null){
    console.log("object null")
    return false;
  }

  if(typeof constructor !== 'function'){
    return false;
    console.log("not function")
  }

  //プロトタイプを参照し、変数に代入する
  let inheritance = Object.getPrototypeOf(object);
  console.log(inheritance);

  //protoの継承がネストになっている可能性があるため、すべてを確認する
  while (inheritance !== null) {
    if (inheritance === constructor.prototype) {
      return true;
    }
    inheritance = Object.getPrototypeOf(inheritance);
  }
  return false;
}

class test1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class test2 extends test1{
    constructor(height,width,dimension) {
      super(height, width);
      this.dimension = dimension;
  }
}

const o = new test1;
const p = new test2;

console.log(instanceOf(o,test1),o instanceof test1);
console.log(instanceOf(p,test1),p instanceof test1);