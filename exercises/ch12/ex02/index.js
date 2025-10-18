//n番目のフィボナッチ数を返す。
export function fibonacciSequence(){
  let x = 0, y = 1;
  return {
    [Symbol.iterator](){ return this;},//イテレータオブジェクト自身を返す
    next(){
      const value = y;
      [x,y] = [y,x+y];//フィボナッチ関数の分割代入。
      return { value, done: false };//元の関数が無限に続く形なので、doneの値は常にfalse
    }
  }
 }

 /*
 const fib = fibonacciSequence();
 console.log(fib.next());
 console.log(fib.next());
 console.log(fib.next());
 console.log(fib.next());
 console.log(fib.next());
 */