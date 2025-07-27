export function makeFixedSizeArray(size) {
  const array = new Array(size);
  return {
    get(index) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index, value) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  constructor() {
    this.len = 0;
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }
  get(index) {
    /* TODO */
	  //getで呼び出されるindexが0以下、または配列全体の要素の長さよりも長い場合、エラー処理
      if (index < 0 || index >= this.len) {
	      throw new Error(`Array index out of range: ${index}`);
    }
    return this.array.get(index);
  }
  set(index, value) {
    /* TODO */
	  //setで呼び出されるindexが0以下、または配列全体の要素よりも長い場合、エラー処理
      if (index < 0 || index >= this.len) {
	      throw new Error(`Array index out of range: ${index}`);
    }
    this.array.set(index, value);
  }
  length() {
    /* TODO */
        //this.lenにて配列の長さを返す。
    return this.len;
  }
  push(value) {
    /* TODO */
	  //this.array に空が無い場合は「再配置」を行う
	  //this.aray.length()で固定配列の長さを取得し、現在の要素数がこれを超える場合処理を実施。
    if (this.len >= this.array.length()) {
      const old = this.array;
      //2倍の固定配列を作成
      this.array = makeFixedSizeArray(old.length() * 2);
      // 古い配列の要素を新しい配列にコピー
      for (let i = 0; i < old.length(); i++) {
        this.array.set(i, old.get(i));
      }
    }
    // 新しい要素を追加
    this.array.set(this.len, value);
    this.len++;
  }
}

//module.exports = DynamicSizeArray;


const arr1 = new DynamicSizeArray();
const arr2 = makeFixedSizeArray(2)
console.log(arr1.length());
console.log(arr2.length());
arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);
console.log(arr1.length());

