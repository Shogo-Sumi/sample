//元コード
/*
function　counter() {
 let　n =0;
 return{
 count:function(){return　n++; },
 reset:function(){n=0;}
 };
 }
*/


export function counterGroup(n) {
  //各メソッド間で共有できる変数。現在のnの値の合計を記録する。
  let funcs = [];
  return {

    //counterGroup#newCounter(): 文中の count と reset 同等の機能を持つ counter オブジェクトを返却する
    newCounter(){
      //get count(),set count()を持つオブジェクトを作成
      //初期値0のカウント用変数nを宣言
      let n = 0;
      const obj = {
        //count()の実装
        count() {
          return n++;
        },
        //reset()の実装
        reset() {
          n = 0;
        }
      }
      //現在のnの値をfuncsへ格納
      funcs.push(n);
      //作成したオブジェクトを返す
      return obj;
    },

    total(){
      let sum =0;
      sum += [...funcs];
      return Number(sum);
    }


  }
}
