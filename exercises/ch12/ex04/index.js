//考え方メモ
//無限の正の整数を生成するジェネレーターを作成する
//作成された正の整数から素数の条件に当てはまるものだけをfilter関数で取得する。

//無限の整数を生成するジェネレーター
//引数として初期値となる整数nを受け取る。
export function* integer(n){
  while(true){
    yield n++;
  }
}

//参考書からの抜粋。filter関数。
//これを、整数の集合から素数だけを取得するように書き換える。
export function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    //このオブジェクトはイテレータであり、反復可能でもある。
    [Symbol.iterator]() {
      return this;
    },
    next() {
      while (true) {
        const { value, done } = iterator.next();
        if (done){
          return {done: true};
        }
        if (predicate(value)) return { value, done: false };
      }
    },
  };
}

//素数を生成するジェネレータ
export function* primes() {
  let seq = integer(2); //初期値2から整数を生成。1は素数ではなく、1の倍数を含めるとプログラムが成り立たない。

  while (true) {
    const iterator = seq[Symbol.iterator]();
    const { value: prime } = iterator.next(); 

    yield prime;

    //primeの倍数を除外して新しいシーケンスを作る
    seq = filter(seq, n => n % prime !== 0);//与えられた数字が、前回の素数で割り切れるか。
  }
}

/*
const test1 = primes();
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
*/