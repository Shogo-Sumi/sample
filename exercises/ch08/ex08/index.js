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
      //現在のnの値をfuncsへ格納。nはクロージャ内でプライベートなため、直接アクセスできない。
      //funcs.push(n)とした場合、funcs内の値は更新されない。
      funcs.push({getCurrent: () => n});
      //作成したオブジェクトを返す
      return obj;
    },

    total(){
      //初期値0でfuncsに格納された値の合計を取得
      return funcs.reduce((sum,counter) => sum + counter.getCurrent(),0)
    },

    average() {
      if (funcs.length === 0) {
        throw new TypeError("funcs does not exist");
      }
      //平均は要素の値の合計/要素数
      return this.total() / funcs.length;
    },

    variance() {
      if (funcs.length < 2) {
        throw new TypeError("funcs must be larger than 2");
      }
      const mean = this.average();
      const squaredDiffSum = funcs.reduce((sum, counter) => {
        const diff = counter.getCurrent() - mean;
        return sum + diff * diff;
      }, 0);
      return squaredDiffSum / funcs.length; // 標本分散
    }
  }
}
