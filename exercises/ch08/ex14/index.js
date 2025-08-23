//P235参照

//any

function any (...func){//anyの引数は残余パラメータとしての関数
    return function(...args){//anyは新しい関数を返す
        //let result = func.some(test => test(...args));
        //return func.some(test => test(...args));
        //複数引数に対応できないため周世4位
        return args.some(arg => func.some(test => test(arg)));
        
        //return result;
        //some()は指定された関数で実装されているテストに、配列の少なくとも一つが合格するか判定する。
    }
}

const isNonZero = any(
  (n) => n > 0,
  (n) => n < 0
);

const isEqual = any(
    (o,p) => o === p
);

const newisNonZero = any(
  (...n) => n > 0,
  (...n) => n < 0
)

console.log(isNonZero);

console.log(isNonZero(0)); // => false
console.log(isNonZero(42)); // => true
console.log(isNonZero(-0.5)); // => true
//isNonZeroは単一の引数を評価するため、0が先頭に来た場合falseを返す。
console.log(isNonZero(1,2,3)); // => true
console.log(isNonZero(0,1,2,3));// => false

console.log(newisNonZero(0,1,2,3));

console.log(isEqual(10,10));// => true
console.log(isEqual(10,11));// => false

//catching

//第一引数JSON.parse、第二引数はJSON.parseでエラーが発生したときに動作する関数。

const safeJsonParse = catching(JSON.parse, (e) => {
  return { error: e.toString() };
});

function catching(f,g){
    return function(...args){
        try {
            return f(...args);
        } catch(e){
            return g(e);
        }
}}

console.log(safeJsonParse('{"a": 1}')); // => {a: 1}
console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."}